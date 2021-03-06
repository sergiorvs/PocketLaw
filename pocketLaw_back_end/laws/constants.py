"""
Core constants
"""
from django.utils.translation import ugettext_lazy as _

# Question Status
NEUTRAL = 0
POSITIVE = 1
NEGATIVE = -1

QUESTION_STATUS_CHOICES = (
    (NEUTRAL, _('Neutro')),
    (POSITIVE, _('Positivo')),
    (NEGATIVE, _('Negativo'))
)

UNDEFINED = '-'
YES = _('si')
NO = _('no')
SIMPLE_ANSWER_CHOICES = (
    (UNDEFINED, _('-')),
    (YES, _('Sí')),
    (NO, _('No'))
)

