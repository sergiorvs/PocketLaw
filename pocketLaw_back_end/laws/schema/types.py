"""
Types for laws
"""
from graphene import (
    List,
    Int,
    Boolean,
)
from graphene_django import DjangoObjectType
from django.utils.translation import ugettext_lazy as _

from core.schema.types import BasePaginationType
from laws.models import (
    Law,
    Question,
    Tag,
)


class LawType(DjangoObjectType):
    """
    User type
    """
    class Meta:
        model = Law
        description = _('Law type')

    questions_number = Int()
    is_favorite = Boolean()

    def resolve_image(self, info):
        if not self.image:

            return None

        return self.image.url

    def resolve_questions_number(self, info):
        return len(self.question_set.all())

    def resolve_is_favorite(self, info):
        user = info.context.user
        if not user.is_anonymous and (self in user.favorites.all()):

            return True

        return False


class QuestionType(DjangoObjectType):
    """
    Question type
    """
    class Meta:
        model = Question
        description = _('Question Type')

    status = Int(description=_('Status value'))

    def resolve_status(self, info):
        return self.status


class TagType(DjangoObjectType):
    """
    Type models
    """
    class Meta:
        model = Tag
        description = _('Tag type')


class LawsPageType(BasePaginationType):
    """
    Base pagination type
    """
    objects = List(LawType, description=_('List of all laws'))
