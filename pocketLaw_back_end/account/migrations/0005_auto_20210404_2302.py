# Generated by Django 3.1.4 on 2021-04-04 23:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0004_auto_20210306_1548'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='documents',
            new_name='terms_and_conditions',
        ),
    ]