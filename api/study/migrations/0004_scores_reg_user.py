# Generated by Django 3.1.1 on 2020-09-16 05:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0001_initial'),
        ('study', '0003_auto_20200916_1115'),
    ]

    operations = [
        migrations.AddField(
            model_name='scores',
            name='reg_user',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='account.user'),
            preserve_default=False,
        ),
    ]
