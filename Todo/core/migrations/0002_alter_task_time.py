# Generated by Django 4.1.3 on 2023-04-02 16:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='time',
            field=models.CharField(max_length=45, unique=True),
        ),
    ]