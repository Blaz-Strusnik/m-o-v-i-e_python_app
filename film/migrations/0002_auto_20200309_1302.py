# Generated by Django 2.2.10 on 2020-03-09 12:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('film', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='movies',
            old_name='year',
            new_name='budget',
        ),
        migrations.RemoveField(
            model_name='movies',
            name='birth_date',
        ),
        migrations.RemoveField(
            model_name='movies',
            name='name',
        ),
        migrations.RemoveField(
            model_name='movies',
            name='runtime',
        ),
    ]
