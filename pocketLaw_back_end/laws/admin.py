from django.contrib import admin

# Register your models here.
from laws.models import (
    Law,
    Question,
    Tag,
)


@admin.register(Law)
class LawAdmin(admin.ModelAdmin):
    """
    Laws Admin
    """
    pass


@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    """
    Question Admin
    """
    pass


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    """
    Tag Admin
    """
    pass

