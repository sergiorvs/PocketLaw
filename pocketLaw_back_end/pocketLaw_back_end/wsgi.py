"""
WSGI config for pocketLaw_back_end project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/howto/deployment/wsgi/
"""

import os
import django

from django.core.handlers.wsgi import WSGIRequest, get_script_name
from django.core import signals
from django.core.handlers import base
from django.urls import set_script_prefix

os.environ.setdefault(
    'DJANGO_SETTINGS_MODULE', 'pocketLaw_back_end.settings')


class WSGIHandler(base.BaseHandler):
    """
    Function took from site-packages/django/core/handlers/wsgi.py
    IMPORTANT: Update accordingly Django version
    """

    request_class = WSGIRequest

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.load_middleware()

    def __call__(self, environ, start_response):
        set_script_prefix(get_script_name(environ))
        signals.request_started.send(sender=self.__class__, environ=environ)
        request = self.request_class(environ)
        response = self.get_response(request)

        response._handler_class = self.__class__
        status = '%d %s' % (response.status_code, response.reason_phrase)

        # UPDATE MADE FOR NOT SETTING "Set-Cookie" ON GRAPHQL POSTS
        if request.path == '/graphql/':
            response_headers = [
                *response.items(),
            ]
        else:
            response_headers = [
                *response.items(),
                *(
                    ('Set-Cookie', c.output(header=''))
                    for c in response.cookies.values()
                ),
            ]

        start_response(status, response_headers)
        if getattr(
            response, 'file_to_stream', None
        ) is not None and environ.get('wsgi.file_wrapper'):
            # If `wsgi.file_wrapper` is used the WSGI server does not call
            # .close on the response, but on the file wrapper. Patch it to use
            # response.close instead which takes care of closing all files.
            response.file_to_stream.close = response.close
            response = environ['wsgi.file_wrapper'](
                response.file_to_stream, response.block_size
            )
        return response


def get_wsgi_application():
    """
    Function took from django/core/wsgi.py
    IMPORTANT: Update accordingly Django version
    """
    django.setup(set_prefix=False)
    return WSGIHandler()


application = get_wsgi_application()

