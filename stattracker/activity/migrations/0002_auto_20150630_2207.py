# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('activity', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='activitystatistics',
            name='activity',
            field=models.ForeignKey(related_name='activity', to='activity.Activity'),
        ),
        migrations.AlterField(
            model_name='activitystatistics',
            name='statistics_date',
            field=models.DateTimeField(default=datetime.datetime(2015, 6, 30, 22, 7, 29, 836797)),
        ),
    ]
