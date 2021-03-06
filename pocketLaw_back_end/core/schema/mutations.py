"""
Core mutations
"""
from django.utils.translation import ugettext_lazy as _
from graphene import (
    Mutation,
    Field,
    List,
    Boolean,
)
from graphene_django.types import ErrorType

from core.schema.types import MessageType


class BaseMutation(Mutation):
    """
    Base mutation class
    """
    class Meta:
        abstract = True

    message = Field(MessageType, default_value=None)
    success = Boolean(default_value=None, description=_('success'))
    field_errors = List(
        ErrorType,
        description=_("May contain more than one error for same field."),
        default_value=None
    )
