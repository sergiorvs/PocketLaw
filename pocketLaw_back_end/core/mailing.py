"""
Core mailing function
"""
from django.core.mail import EmailMultiAlternatives
from django.template import loader
from django.conf import settings

from core.models import EmailRecord


def send_mail(
        subject: str,
        email_template_name: str,
        context: dict,
        to_email: str,
        from_email: str = getattr(settings, 'DEFAULT_FROM_EMAIL'),
        html_email_template_name: str = None
) -> None:
    """
    Send a django.core.mail.EmailMultiAlternatives to `to_email`.

    :param subject: subject string
    :param email_template_name: template dir of content html file
    :param context: dictionary with extra data to render in email
    :param from_email: email source
    :param to_email: email destination
    :param html_email_template_name: template dir of content html file
    :return: None
    """
    body = loader.render_to_string(email_template_name, context)
    email_message = EmailMultiAlternatives(
        subject=subject, body=body, from_email=from_email, to=[to_email])
    if html_email_template_name is not None:
        html_email = loader.render_to_string(html_email_template_name, context)
        email_message.attach_alternative(html_email, 'text/html')
    email_message.send()

    # Save email record
    EmailRecord.objects.create(
        subject=subject,
        receiver=to_email,
        body=body
    )
