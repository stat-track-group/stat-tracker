from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Activity(models.Model):
    activity_name = models.CharField(max_length = 255)
    description = models.CharField(max_length = 255)
    owner = models.ForeignKey(User)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    def __str__(self):
        return self.activity_name
'''
class UserActivity(models.Model):
    activity = models.ForeignKey(Activity)
    owner = models.ForeignKey(User)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
'''
    
class ActivityStatistics(models.Model):
    activity = models.ForeignKey(Activity)
    owner = models.ForeignKey(User)
    statistics_date = models.DateTimeField()
    value = models.CharField(max_length = 10)

    def __str__(self):
        return "{}: {} - {}".format(self.user, self.activity, self.value)
