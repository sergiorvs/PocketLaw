from __future__ import (
    absolute_import,
    unicode_literals,
)
import os
from celery import Celery
from django.conf import settings

# set the default Django settings module for the 'celery' program.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'pocketLaw_back_end.settings')
app = Celery('pocketLaw_back_end')

# Using a string here means the worker will not have to
# pickle the object when using Windows.
app.config_from_object('django.conf:settings', namespace='CELERY')
app.autodiscover_tasks()
app.conf.update(
    BROKER_URL=settings.CELERY_BROKER_URL
)
app.conf.timezone = settings.TIME_ZONE
