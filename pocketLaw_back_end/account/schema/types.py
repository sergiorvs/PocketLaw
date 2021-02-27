"""
Types for account
"""
from graphene_django import DjangoObjectType
from django.utils.translation import ugettext_lazy as _

from account.models import User


class UserType(DjangoObjectType):
    """
    User type
    """
    class Meta:
        model = User
        exclude = ['password', 'is_superuser', 'last_login', 'date_joined']
        description = _('User type')

    def resolve_profile_picture(self, info):
        if not self.profile_picture:

            return None

        return self.profile_picture.url
