"""
Queries for laws
"""
from django.db.models import Q
from graphene import (
    ObjectType,
    Int,
    String,
    Field,
    List, ID)

from django.utils.translation import ugettext_lazy as _

from core.constants import PAGE_SIZE
from core.utils import get_paginator
from laws.models import Law, Question
from laws.schema.types import (
    LawsPageType,
    QuestionType,
)


class Query(ObjectType):
    """
    Graphql Queries
    """
    get_all_laws = Field(
        LawsPageType,
        page=Int(),
        search_filter=String(),
        description=_('Gets all laws')
    )

    get_questions_by_law = List(
        QuestionType,
        id_law=ID(required=True, description=_('Get questions by id of law'))
    )

    @staticmethod
    def resolve_get_all_laws(self, info, **kwargs):
        page = kwargs.get('page', 1)
        search_filter = kwargs.get('search_filter', '')

        query_set = Law.objects.filter(
            Q(title__icontains=search_filter)
            | Q(description__icontains=search_filter)
        ).order_by('title')

        return get_paginator(query_set, PAGE_SIZE, page, LawsPageType)

    @staticmethod
    def resolve_get_questions_by_law(self, info, **kwargs):
        id_law = kwargs.get('id')

        return Question.objects.filter(id_law=id_law)


