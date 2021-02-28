"""
Account graphql query
"""
from django.utils.encoding import force_text
from django.utils.translation import ugettext_lazy as _
from django.utils.http import urlsafe_base64_decode
from graphene import (
    ObjectType,
    Field,
    String,
    Boolean,
)
from graphql_jwt.decorators import login_required

from account.schema.types import (
    UserType,
)
from account.models import (
    User,
)
from core.tokens import (
    account_activation_token,
)


class Query(ObjectType):
    """
    Graphql Queries
    """
    me = Field(UserType, description=_('user information'))
    check_token = Field(
        Boolean,
        uid=String(),
        token=String()
    )

    @login_required
    def resolve_me(self, info):
        return info.context.user

    @staticmethod
    def resolve_check_token(self, info, **kwargs):
        uid = kwargs.get('uid')
        token = kwargs.get('token')
        uid = force_text(urlsafe_base64_decode(uid))

        try:
            user = User.objects.get(pk=uid)
            if account_activation_token.check_token(user, token):

                return True

            return False

        except User.DoesNotExist:

            return False
