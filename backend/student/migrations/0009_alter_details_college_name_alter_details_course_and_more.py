# Generated by Django 4.0 on 2021-12-30 06:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student', '0008_alter_details_phone'),
    ]

    operations = [
        migrations.AlterField(
            model_name='details',
            name='college_name',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='details',
            name='course',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='details',
            name='first_name',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='details',
            name='last_name',
            field=models.CharField(max_length=50),
        ),
    ]
