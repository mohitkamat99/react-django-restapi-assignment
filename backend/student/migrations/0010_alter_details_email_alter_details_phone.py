# Generated by Django 4.0 on 2021-12-30 06:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student', '0009_alter_details_college_name_alter_details_course_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='details',
            name='email',
            field=models.EmailField(max_length=30),
        ),
        migrations.AlterField(
            model_name='details',
            name='phone',
            field=models.BigIntegerField(),
        ),
    ]