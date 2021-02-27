"""
Core types
"""
from django.utils.translation import ugettext_lazy as _

from graphene import (
    ObjectType,
    Int,
    Boolean,
)


class BasePaginationType(ObjectType):
    """
    Favorites pagination type
    """
    page = Int(description=_('Current page'))
    pages = Int(description=_('Number of pages'))
    has_next = Boolean(description=_('Is there a nex page?'))
    has_prev = Boolean(description=_('Is there a previous page?'))
