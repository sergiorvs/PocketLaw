"""
Account Serializers
"""
import django.contrib.auth.password_validation as validators
from django.utils.encoding import force_text
from django.utils.http import urlsafe_base64_decode

from rest_framework import serializers
from rest_framework.validators import UniqueValidator

from account.messages.error_messages import (
    TERMS_AND_CONDITIONS,
    ACCOUNT_ALREADY_EXIST,
    PASSWORDS_DOES_NOT_MATCH,
    INCORRECT_PASSWORD,
    INVALID_TOKEN_ERROR)
from account.models import User
from core.tokens import reset_password_token


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


class UserChangePasswordSerializer(serializers.ModelSerializer):
    """
    Change Password Serializer
    """
    uidb64 = serializers.CharField(required=True)
    token = serializers.CharField(required=True)
    password1 = serializers.CharField(required=True)
    password2 = serializers.CharField(required=True)

    class Meta:
        model = User
        fields = ('uidb64', 'token', 'password1', 'password2')

    @staticmethod
    def validate_password1(password):
        """
        Validate is password is correct
        :param password: password input
        :return: password
        """
        try:
            validators.validate_password(password)

            return password

        except Exception:

            raise serializers.ValidationError(INCORRECT_PASSWORD)

    def validate(self, attrs):
        """
        Validate if password1 and password2 are the same
        :param attrs: input serializer data
        :return: attrs
        """
        uidb64 = attrs['uidb64']
        token = attrs['token']
        uid = force_text(urlsafe_base64_decode(uidb64))

        try:
            user = User.objects.get(pk=uid, delete_account_date__isnull=True)
            if not reset_password_token.check_token(user, token):

                raise serializers.ValidationError(
                    INVALID_TOKEN_ERROR
                )

        except User.DoesNotExist:
            raise serializers.ValidationError(
                INVALID_TOKEN_ERROR
            )

        if attrs['password1'] != attrs['password2']:
            raise serializers.ValidationError(
                {
                    'password1': PASSWORDS_DOES_NOT_MATCH,
                    'password2': PASSWORDS_DOES_NOT_MATCH,
                }
            )

        return attrs

    def save(self):
        """
        Create new user
        """
        data = self.validated_data
        password = data['password1']
        uidb64 = data['uidb64']
        uid = force_text(urlsafe_base64_decode(uidb64))

        user = User.objects.get(pk=uid)
        user.set_password(password)
        user.save()

        return user
