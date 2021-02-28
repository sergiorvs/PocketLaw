"""
Account Mutations
"""
from django.utils.translation import ugettext_lazy as _

from graphene import Field, ObjectType
from graphene_django.rest_framework.mutation import SerializerMutation

from account.messages.success_messages import (
    SUCCESSFULLY_REGISTER_DESCRIPTION,
    SUCCESSFULLY_REGISTER,
)
from account.serializers import RegisterSerializer
from core.constants import (
    SUCCESS_MESSAGE_TYPE,
)
from core.schema.types import MessageType
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

        # # celery task
        # sign_up_email_confirmation.delay(
        #     user_id=user.pk,
        #     email=email,
        #     subject=REGISTER_USER_SUBJECT,
        #     domain=domain,
        # )

        return cls(errors=None, message=MessageType(
            title=SUCCESSFULLY_REGISTER,
            description=SUCCESSFULLY_REGISTER_DESCRIPTION,
            type=SUCCESS_MESSAGE_TYPE
        ))


class Mutation(ObjectType):
    """
    All mutations methods
    """
    create_user = CreateUser.Field(
        description=_('allows to create both types of users')
    )
