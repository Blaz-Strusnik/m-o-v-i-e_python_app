# Generated by Django 2.2.10 on 2020-03-09 12:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('film', '0007_auto_20200309_1316'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movies',
            name='score',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='movies',
            name='year',
            field=models.IntegerField(),
        ),
    ]
