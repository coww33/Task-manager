# Generated by Django 4.1.8 on 2023-04-09 08:06

import datetime
from django.db import migrations, models
import secrets


class Migration(migrations.Migration):

    dependencies = [
        ('company', '0002_alter_company_code_expiration'),
    ]

    operations = [
        migrations.AlterField(
            model_name='company',
            name='code',
            field=models.CharField(default=secrets.token_urlsafe, max_length=32, unique=True),
        ),
        migrations.AlterField(
            model_name='company',
            name='code_expiration',
            field=models.DateTimeField(default=datetime.datetime(2023, 4, 16, 8, 6, 44, 853932, tzinfo=datetime.timezone.utc)),
        ),
    ]