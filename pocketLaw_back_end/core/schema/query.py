"""
Account graphql query
"""
from urllib import request

from graphene import (
    ObjectType,
    String,
)

from django.contrib.staticfiles.storage import staticfiles_storage

from pocketLaw_back_end.settings import BACKEND_URL


class Query(ObjectType):
    """
    Graphql Queries
    """
    privacy_politics = String()

    @staticmethod
    def resolve_privacy_politics(self, info):
        return staticfiles_storage.url("documents/privacity_politics.pdf")
