# Generated by Django 3.1.4 on 2021-02-28 16:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='terms_and_conditions',
            field=models.BooleanField(default=False, verbose_name='Terms and Conditions'),
        ),
    ]