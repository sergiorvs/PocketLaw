"""
Account models
"""
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import ugettext_lazy as _

from account.managers import CustomUserManager
from account.messages.error_messages import EMAIL_ALREADY_EXIST
from laws.models import Law


class User(AbstractUser):
    """
    Custom user model
    """
    username = None
    email = models.EmailField(
        _('correo'),
        unique=True,
        error_messages={'unique': EMAIL_ALREADY_EXIST}
    )
    first_name = models.CharField(
        _('nombres'), max_length=20, blank=True)
    last_name = models.CharField(
        _('apellidos'), max_length=20, blank=True)
    terms_and_conditions = models.BooleanField(
        _("Terms and Conditions"), default=False)
    delete_account_date = models.DateTimeField(
        _('fecha en que se eliminó la cuenta'), null=True, blank=True)
    favorites = models.ManyToManyField(
        Law,
        blank=True,
        verbose_name=_('favorites')
    )
    profile_picture = models.ImageField(
        _('foto de perfil'), null=True, blank=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
        return self.email

    @property
    def is_deleted(self) -> bool:
        """
        Get is account is deleted
        :return: boolean
        """
        return self.delete_account_date is not None

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)


class TokenAux(models.Model):
    """
    Model to create a new token every time is called
    """
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        primary_key=True,
        verbose_name=_('user')
    )
    counter = models.IntegerField(_('counter'))

    def __str__(self):
        return self.user.email
