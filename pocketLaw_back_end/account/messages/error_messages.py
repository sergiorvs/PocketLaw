"""
Error messages for account
"""
from django.utils.translation import ugettext_lazy as _

EMAIL_ALREADY_EXIST = _('Este email ya existe')
TERMS_AND_CONDITIONS = _('Debes aceptar los términos y condiciones')
ACCOUNT_ALREADY_EXIST = _('Usuario con este email ya existe')
PASSWORDS_DOES_NOT_MATCH = _('Las contraseñas no coinciden!')
INVALID_TOKEN_ERROR = _('El link es inválido')