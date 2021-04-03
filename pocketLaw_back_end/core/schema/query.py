"""
Account graphql query
"""
from graphene import (
    ObjectType,
    String,
)

from django.contrib.staticfiles.storage import staticfiles_storage

from core.utils import get_domain


class Query(ObjectType):
    """
    Graphql Queries
    """
    privacy_politics = String()

    @staticmethod
    def resolve_privacy_politics(self, info):
        return f'{get_domain(info.context)}' \
               f'{staticfiles_storage.url("documents/privacity_politics.pdf")}'
