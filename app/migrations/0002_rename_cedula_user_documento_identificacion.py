# Generated by Django 3.2.9 on 2021-11-29 20:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='cedula',
            new_name='documento_identificacion',
        ),
    ]
