"""
Account Mutations
"""
import random

from django.utils.translation import ugettext_lazy as _
from django.utils.encoding import (
    force_text,
)
from django.utils.http import (
    urlsafe_base64_decode,
)

from graphene import (
    Field,
    ObjectType,
    Mutation,
    ID,
    String,
)
from graphene_django.rest_framework.mutation import SerializerMutation
from graphene_django.types import ErrorType
from graphene_file_upload.scalars import Upload
from graphql_jwt.decorators import login_required

from account.messages.error_messages import (
    INVALID_TOKEN_ERROR,
    LAW_DOES_NOT_EXIST,
    CANNOT_UPLOAD_IMAGE,
    EMAIL_ADDRESS_DOES_NOT_EXIST,
)
from account.messages.success_messages import (
    SUCCESSFULLY_REGISTER_DESCRIPTION,
    SUCCESSFULLY_REGISTER,
    ACTIVATE_ACCOUNT_TITLE,
    ACTIVATE_ACCOUNT,
    ADDED_FAVORITE_TITLE,
    ADDED_FAVORITE,
    PROFILE_IMAGE_UPLOADED,
    RESTORE_PASSWORD_CHANGE_TITLE, RESTORE_PASSWORD_CHANGE, DELETED_FAVORITE,
    DELETED_FAVORITE_TITLE)
from account.messages.warning_messages import (
    ALREADY_ACTIVATE_ACCOUNT_TITLE,
    ALREADY_ACTIVATE_ACCOUNT,
    RESTORE_PASSWORD_EMAIL_ACTIVE,
)
from account.models import (
    User,
    TokenAux,
)
from account.schema.inputs import ActivateAccountInput
from account.serializers import RegisterSerializer, UserChangePasswordSerializer
from account.tasks import (
    sign_up_email_confirmation,
    send_success_confirmation_email,
    send_restore_password_link,
    send_password_reset_successfull)
from core.constants import (
    SUCCESS_MESSAGE_TYPE,
    WARNING_MESSAGE_TYPE,
    ERROR_MESSAGE_TYPE,
)
from core.schema.mutations import BaseMutation
from core.schema.types import (
    MessageType,
)
from core.tokens import account_activation_token
from core.utils import (
    get_domain,
    get_model_by_id,
)
from laws.models import Law


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


class RestorePasswordRequest(BaseMutation):
    """
    Send email with a token to restore password
    """

    class Arguments:
        email = String()

    @staticmethod
    def mutate(self, info, email):
        errors = dict()
        email = email

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            errors['email'] = [EMAIL_ADDRESS_DOES_NOT_EXIST]

            return RestorePasswordRequest(
                success=False,
                field_errors=ErrorType.from_errors(errors)
            )

        if not user.is_active or user.is_deleted:

            return RestorePasswordRequest(message=MessageType(
                title=RESTORE_PASSWORD_EMAIL_ACTIVE,
                description=RESTORE_PASSWORD_EMAIL_ACTIVE,
                type=WARNING_MESSAGE_TYPE
            ))

        domain = get_domain(info.context)

        send_restore_password_link.delay(
            user_id=user.pk,
            email=email,
            domain=domain,
        )

        return RestorePasswordRequest(message=MessageType(
            title='RESTORE_PASSWORD_EMAIL_TITLE',
            description='RESTORE_PASSWORD_EMAIL',
            type=SUCCESS_MESSAGE_TYPE
        ))


class RestorePassword(SerializerMutation):
    """
    Mutation to restore password after link is confirmed
    """

    class Meta:
        serializer_class = UserChangePasswordSerializer

    message = Field(MessageType)

    @classmethod
    def perform_mutate(cls, serializer, info):
        user = serializer.save()

        email = user.email

        send_password_reset_successfull.delay(
            email=email,
        )

        cont = random.randint(1, 101)
        tk = TokenAux.objects.get(user=user)
        tk.counter = cont
        tk.save()

        return cls(errors=None, message=MessageType(
            title=RESTORE_PASSWORD_CHANGE_TITLE,
            description=RESTORE_PASSWORD_CHANGE,
            type=SUCCESS_MESSAGE_TYPE
        ))


class AddFavorites(BaseMutation):
    """
    Add law to favorites of the current user
    """
    class Arguments:
        law_id = ID(required=True)

    @login_required
    def mutate(self, info, **kwargs):
        user = info.context.user
        law_id = kwargs.get('law_id')

        description = ADDED_FAVORITE
        title = ADDED_FAVORITE_TITLE

        law = get_model_by_id(Law, law_id)
        if not law:

            return AddFavorites(message=MessageType(
                title=LAW_DOES_NOT_EXIST,
                description=LAW_DOES_NOT_EXIST,
                type=ERROR_MESSAGE_TYPE,
            ))

        if law in user.favorites.all():
            user.favorites.remove(law)
            title = DELETED_FAVORITE_TITLE
            description = DELETED_FAVORITE
        else:
            user.favorites.add(law)
        user.save()

        return AddFavorites(
            message=MessageType(
                title=title,
                description=description,
                type=SUCCESS_MESSAGE_TYPE
            ),
            success=True
        )


class UploadProfileImage(BaseMutation):
    """
    Mutation to upload profile image
    """
    class Arguments:
        profile_image = Upload(required=True, description=_('Imagen de perfil'))

    @login_required
    def mutate(self, info, **kwargs):
        profile_image = kwargs.get('profile_image')
        user = info.context.user

        if 'image' in profile_image.content_type:
            user.profile_picture = profile_image
            user.save()

            return UploadProfileImage(
                success=True,
                message=MessageType(
                    description=PROFILE_IMAGE_UPLOADED,
                    type=SUCCESS_MESSAGE_TYPE
                ),
            )

        else:

            return UploadProfileImage(
                success=False,
                message=MessageType(
                    description=CANNOT_UPLOAD_IMAGE,
                    type=ERROR_MESSAGE_TYPE
                ),
            )


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
    add_to_favorites = AddFavorites.Field(
        description=_('add law to favorites')
    )
    upload_profile_image = UploadProfileImage.Field(
        description=_('upload profile image')
    )
    restore_password = RestorePasswordRequest.Field(
        description=_('restore password')
    )
    change_password = RestorePassword.Field(
        description=_('change password mutation')
    )
