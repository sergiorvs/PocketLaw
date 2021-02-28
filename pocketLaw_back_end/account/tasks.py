"""
Celery Tasks
"""
import random

from celery import shared_task
from django.template.loader import render_to_string
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode

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


# @shared_task
# def sign_up_email_confirmation(**kwargs):
#     """
#     Send email from html file
#     """
#     user_id = kwargs.get('user_id')
#     user = get_model_by_id(User, user_id)
#     email = kwargs.get('email')
#     mail_subject = kwargs.get('subject')
#     domain = kwargs.get('domain')
#
#     # Token for mail
#     num = random.randint(1, 101)
#     token_seed = TokenAux(user=user, counter=num)
#     token_seed.save()
#
#     # Sending email
#     email_template_name = 'mail/account/acc_active_email.html'
#     mail_data = {
#         'from_email': getattr(settings, 'DEFAULT_FROM_EMAIL'),
#         'to_email': email,
#         'subject': 'Confirm mail',
#         'email_template_name': 'mail/account/acc_active_email.html',
#         'html_email_template_name': 'email/account/reset_password.html',
#         'context': {
#             'user': user,
#             'link': link,
#         },
#     }
#
#     send_mail(**)