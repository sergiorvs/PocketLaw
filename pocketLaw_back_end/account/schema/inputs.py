"""
Account inputs for the Graphql Schema
"""
from django.utils.translation import ugettext_lazy as _

from graphene import (
    InputObjectType,
    String,
)


class ActivateAccountInput(InputObjectType):
    """
    Input token and email to activate account
    """
    uid = String(
        required=True,
        description=_('Uid to get the user')
    )
    token = String(
        required=True,
        description=_('Token to check if the link is correct')
    )
