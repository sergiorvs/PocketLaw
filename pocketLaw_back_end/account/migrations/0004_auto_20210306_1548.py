# Generated by Django 3.1.4 on 2021-03-06 15:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('laws', '0002_auto_20210306_1548'),
        ('account', '0003_tokenaux'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.EmailField(error_messages={'unique': 'Este email ya existe'}, max_length=254, unique=True, verbose_name='correo'),
        ),
        migrations.AlterField(
            model_name='user',
            name='favorites',
            field=models.ManyToManyField(blank=True, to='laws.Law', verbose_name='favoritos'),
        ),
    ]
