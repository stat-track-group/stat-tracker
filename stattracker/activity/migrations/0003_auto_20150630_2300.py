# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('activity', '0002_auto_20150630_2207'),
    ]

    operations = [
        migrations.AlterField(
            model_name='activitystatistics',
            name='statistics_date',
            field=models.DateField(),
        ),
    ]
