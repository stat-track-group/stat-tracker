from django.db import models
from django.contrib.auth.models import User
from datetime import datetime


class Activity(models.Model):
    activity_name = models.CharField(max_length = 255)
    description = models.CharField(max_length = 255)
    owner = models.ForeignKey(User)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    def __str__(self):
        return self.activity_name

    
class ActivityStatistics(models.Model):
    activity = models.ForeignKey(Activity, related_name="activity")
    owner = models.ForeignKey(User)
    statistics_date = models.DateField()
    value = models.CharField(max_length = 10)

    def __str__(self):
        return "{}: {} - {}".format(self.owner, self.activity, self.value)
