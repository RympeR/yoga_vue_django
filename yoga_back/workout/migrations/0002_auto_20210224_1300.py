# Generated by Django 3.1.7 on 2021-02-24 10:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('workout', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='workout',
            options={'ordering': ['id'], 'verbose_name': 'Тренировка', 'verbose_name_plural': 'Тренировки'},
        ),
        migrations.RemoveField(
            model_name='workout',
            name='title',
        ),
    ]
