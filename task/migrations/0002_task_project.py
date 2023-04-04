# Generated by Django 4.1.7 on 2023-04-04 12:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('project', '0001_initial'),
        ('task', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='project',
            field=models.ForeignKey(default='1', on_delete=django.db.models.deletion.CASCADE, related_name='tasks', to='project.project'),
        ),
    ]