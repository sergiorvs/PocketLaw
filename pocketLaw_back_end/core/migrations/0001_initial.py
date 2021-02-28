# Generated by Django 3.1.4 on 2021-02-28 17:15

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='EmailRecord',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('subject', models.CharField(editable=False, max_length=128, verbose_name='Asunto')),
                ('receiver', models.EmailField(editable=False, max_length=254, verbose_name='Destino')),
                ('body', models.TextField(editable=False, verbose_name='Contenido')),
                ('send_on', models.DateTimeField(auto_now_add=True, verbose_name='Enviado en')),
            ],
            options={
                'verbose_name': 'email records',
                'verbose_name_plural': 'email records',
                'default_permissions': ('view',),
            },
        ),
    ]