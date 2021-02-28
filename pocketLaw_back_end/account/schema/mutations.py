"""
Account Mutations
"""
from django.utils.translation import ugettext_lazy as _
from django.utils.encoding import (
    force_text,
)
from django.utils.http import (
    urlsafe_base64_decode,
)

from graphene import Field, ObjectType, Mutation
from graphene_django.rest_framework.mutation import SerializerMutation

from account.messages.error_messages import (
    INVALID_TOKEN_ERROR
)
from account.messages.success_messages import (
    SUCCESSFULLY_REGISTER_DESCRIPTION,
    SUCCESSFULLY_REGISTER,
    ACTIVATE_ACCOUNT_TITLE,
    ACTIVATE_ACCOUNT,
)
from account.messages.warning_messages import (
    ALREADY_ACTIVATE_ACCOUNT_TITLE,
    ALREADY_ACTIVATE_ACCOUNT,
)
from account.models import User
from account.schema.inputs import ActivateAccountInput
from account.serializers import RegisterSerializer
from account.tasks import (
    sign_up_email_confirmation,
    send_success_confirmation_email,
)
from core.constants import (
    SUCCESS_MESSAGE_TYPE,
    WARNING_MESSAGE_TYPE,
)
from core.schema.types import MessageType
from core.tokens import account_activation_token
from core.utils import get_domain


class CreateUser(SerializerMutation):
    """
    Register Mutation
    """

    class Meta:
        serializer_class = RegisterSerializer
        model_operations = ['create']

    message = Field(MessageType)

    @classmethod
    def perform_mutate(cls, serializer, info):
        user = serializer.save()

        email = user.email
        domain = get_domain(info.context)

        # celery task
        sign_up_email_confirmation.delay(
            user_id=user.pk,
            email=email,
            domain=domain,
        )

        return cls(errors=None, message=MessageType(
            title=SUCCESSFULLY_REGISTER,
            description=SUCCESSFULLY_REGISTER_DESCRIPTION,
            type=SUCCESS_MESSAGE_TYPE
        ))


class ActivateAccount(Mutation):
    """
    Activate account with email confirmation
    """

    class Arguments:
        activate_data = ActivateAccountInput(required=True)

    message = Field(MessageType)

    @staticmethod
    def mutate(self, info, activate_data=None):
        uid = activate_data.uid
        pk = force_text(urlsafe_base64_decode(uid))
        token = activate_data.token
        domain = get_domain(info.context)
        try:
            user = User.objects.get(pk=pk)
            if user.is_active and not user.is_deleted:

                return ActivateAccount(message=MessageType(
                    title=ALREADY_ACTIVATE_ACCOUNT_TITLE,
                    description=ALREADY_ACTIVATE_ACCOUNT,
                    type=WARNING_MESSAGE_TYPE
                ))

            if account_activation_token.check_token(user, token):
                user.is_active = True

                send_success_confirmation_email.delay(
                    email=user.email,
                    domain=domain,
                )
                user.save()

                return ActivateAccount(message=MessageType(
                    title=ACTIVATE_ACCOUNT_TITLE,
                    description=ACTIVATE_ACCOUNT,
                    type=SUCCESS_MESSAGE_TYPE
                ))

        except User.DoesNotExist:
            pass

        raise ValueError(INVALID_TOKEN_ERROR)


class Mutation(ObjectType):
    """
    All mutations methods
    """
    create_user = CreateUser.Field(
        description=_('allows to create both types of users')
    )
    activate_account = ActivateAccount.Field(
        description=_('activate account')
    )
