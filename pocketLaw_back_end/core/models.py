"""
Core models
"""
from django.db import models
from django.utils.translation import ugettext_lazy as _


class EmailRecord(models.Model):
    """
    Email record
    This is a model to store all sent emails
    """
    subject = models.CharField(_('Asunto'), max_length=128, editable=False)
    receiver = models.EmailField(_('Destino'), editable=False)
    body = models.TextField(_('Contenido'), editable=False)
    send_on = models.DateTimeField(
        _('Enviado en'), editable=False, auto_now_add=True)

    def __str__(self):
        return self.receiver

    class Meta:
        default_permissions = ('view',)
        verbose_name = _('email records')
        verbose_name_plural = _('email records')
