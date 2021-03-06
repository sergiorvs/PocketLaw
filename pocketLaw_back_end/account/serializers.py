import django.contrib.auth.password_validation as validators

from rest_framework import serializers
from rest_framework.validators import UniqueValidator

from account.messages.error_messages import (
    TERMS_AND_CONDITIONS,
    ACCOUNT_ALREADY_EXIST,
    PASSWORDS_DOES_NOT_MATCH,
)
from account.models import User


class RegisterSerializer(serializers.ModelSerializer):
    """
    Second step to register serializer
    """
    email = serializers.EmailField(
        validators=[
            UniqueValidator(
                queryset=User.objects.all(), message=ACCOUNT_ALREADY_EXIST
            )
        ],
        required=True,
    )
    terms_and_conditions = serializers.BooleanField(required=True)
    repeat_password = serializers.CharField(required=True)

    class Meta:
        model = User
        fields = (
            "email",
            "first_name",
            "last_name",
            "password",
            "repeat_password",
            "terms_and_conditions",
        )

    @staticmethod
    def validate_password(password):
        """
        Validate if the password is correct
        :param password: password input
        :return: password
        """
        try:
            validators.validate_password(password)

            return password

        except Exception as e:

            raise serializers.ValidationError(" ".join(e.messages))

    @staticmethod
    def validate_terms_and_conditions(terms_and_conditions):
        """
        Check if the 'term and conditions' are correct
        :param terms_and_conditions: terms_and_conditions input
        :return: terms_and_conditions
        """
        if not terms_and_conditions:

            raise serializers.ValidationError(TERMS_AND_CONDITIONS)

        return terms_and_conditions

    def validate(self, attrs):
        """
        Validate attrs
        """
        password = attrs.get('password')
        repeat_password = attrs.pop('repeat_password')

        if password != repeat_password:
            raise serializers.ValidationError(
                {'repeat_password': PASSWORDS_DOES_NOT_MATCH}
            )

        return attrs

    def save(self):
        """
        Create new user
        """
        data = {**self.validated_data}
        email = data.pop("email")
        password = data.pop("password")
        user = User.objects.create_user(
            email=email,
            password=password,
            **data
        )

        return user
