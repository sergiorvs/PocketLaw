"""
Token Generator
"""
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from six import text_type
from account.models import TokenAux


class TokenGenerator(PasswordResetTokenGenerator):
    """
    Token Generator class
    """
    def _make_hash_value(self, user, timestamp):
        num = TokenAux.objects.get(user=user).counter

        return (
                text_type(user.pk) + text_type(timestamp) +
                text_type(user.is_active) + text_type(num)
        )


class TokenResetPasswordGenerator(PasswordResetTokenGenerator):
    """
    Token for new password class
    """
    def _make_hash_value(self, user, timestamp):
        num = TokenAux.objects.get(user=user).counter

        return (
                text_type(user.pk) + text_type(timestamp) +
                text_type(num) +
                text_type(user.email)
        )


account_activation_token = TokenGenerator()
reset_password_token = TokenResetPasswordGenerator()
