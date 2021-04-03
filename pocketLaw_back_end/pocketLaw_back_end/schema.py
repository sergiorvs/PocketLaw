"""
General Schema
"""
from graphene import (
    ObjectType,
    String,
    Field, Schema)
from graphql_jwt import (
    JSONWebTokenMutation,
    Verify,
    Refresh,
)

from account.schema.types import UserType
from account.schema import Mutation as AccountMutations
from account.schema import Query as AccountQueries
from laws.schema import Query as LawsQueries
from core.schema import Query as CoreQueries


class ObtainJSONWebToken(JSONWebTokenMutation):
    user = Field(UserType)

    @classmethod
    def resolve(cls, root, info, **kwargs):
        return cls(user=info.context.user)


class Query(LawsQueries, CoreQueries, AccountQueries):
    hello = String(default_value="Hi!")


class Mutation(AccountMutations):
    token_auth = ObtainJSONWebToken.Field()
    verify_token = Verify.Field()
    refresh_token = Refresh.Field()


schema = Schema(query=Query, mutation=Mutation)
