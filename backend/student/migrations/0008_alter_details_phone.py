# Generated by Django 4.0 on 2021-12-30 05:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student', '0007_alter_details_phone'),
    ]

    operations = [
        migrations.AlterField(
            model_name='details',
            name='phone',
            field=models.BigIntegerField(default=0),
        ),
    ]
