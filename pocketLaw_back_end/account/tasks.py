"""
Celery Tasks
"""
import random

from celery import shared_task
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode

from account.messages.mail_subjects import (
    CONFIRM_EMAIL
)
from account.models import (
    User,
    TokenAux,
)
from core.mailing import send_mail
from core.tokens import account_activation_token
from core.utils import (
    get_model_by_id,
)
from pocketLaw_back_end import settings


@shared_task
def sign_up_email_confirmation(**kwargs):
    """
    Send email from html file
    """
    user_id = kwargs.get('user_id')
    email = kwargs.get('email')
    domain = kwargs.get('domain')

    user = get_model_by_id(User, user_id)
    uid = urlsafe_base64_encode(force_bytes(user.pk))

    # Token for mail
    num = random.randint(1, 101)
    token_seed = TokenAux(user=user, counter=num)
    token_seed.save()
    token = account_activation_token.make_token(user)

    link = f'{domain}activate/account/{uid}/{token}'

    # Sending email
    mail_data = {
        'from_email': getattr(settings, 'DEFAULT_FROM_EMAIL'),
        'to_email': email,
        'subject': CONFIRM_EMAIL,
        'email_template_name': 'email/account/register_successfully.html',
        'html_email_template_name': 'email/account/register_successfully.html',
        'context': {
            'user': user,
            'link': link,
        },
    }

    send_mail(**mail_data)


# @shared_task
# def send_account_activated(**kwargs):
#     """
#     Send email when account is activated
#     """
#     user_id = kwargs.get('user_id')
#     email = kwargs.get('email')
#     domain = kwargs.get('domain')
#
#     user = get_model_by_id(User, user_id)
#     uid = urlsafe_base64_encode(force_bytes(user.pk))
#
#     # Token for mail
#     num = random.randint(1, 101)
#     token_seed = TokenAux(user=user, counter=num)
#     token_seed.save()
#     token = account_activation_token.make_token(user)
#
#     link = f'{domain}activate/account/{uid}/{token}'
#
#     # Sending email
#     mail_data = {
#         'from_email': getattr(settings, 'DEFAULT_FROM_EMAIL'),
#         'to_email': email,
#         'subject': CONFIRM_EMAIL,
#         'email_template_name': 'email/account/register_successfully.html',
#         'html_email_template_name': 'email/account/register_successfully.html',
#         'context': {
#             'user': user,
#             'link': link,
#         },
#     }
#
#     send_mail(**mail_data)

