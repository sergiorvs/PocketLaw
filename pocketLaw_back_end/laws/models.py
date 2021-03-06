"""
Laws Models
"""
from django.db import models

from laws.constants import (
    QUESTION_STATUS_CHOICES,
    NEUTRAL,
    SIMPLE_ANSWER_CHOICES,
    UNDEFINED,
)


class Tag(models.Model):
    """
    Tag model
    """
    tag = models.CharField(max_length=100)

    def __str__(self):
        return self.tag


class Law(models.Model):
    """
    Laws model
    """
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField()
    tag = models.ForeignKey(
        Tag,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
    )

    def __str__(self):
        return self.title


class Question(models.Model):
    """
    Question model
    """
    question = models.CharField(max_length=500)
    answer = models.TextField()
    law = models.ForeignKey(
        Law,
        on_delete=models.CASCADE
    )
    status = models.IntegerField(
        choices=QUESTION_STATUS_CHOICES, default=NEUTRAL)
    simple_answer = models.CharField(
        max_length=3, choices=SIMPLE_ANSWER_CHOICES, default=UNDEFINED)

    def __str__(self):
        return self.question

