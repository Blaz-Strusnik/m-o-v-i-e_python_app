# Generated by Django 2.2.10 on 2020-03-09 12:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('film', '0012_auto_20200309_1320'),
    ]

    operations = [
        migrations.AddField(
            model_name='movies',
            name='genre',
            field=models.CharField(default='', max_length=200),
        ),
    ]
