from django.core.management.base import BaseCommand, CommandError
from django.contrib.auth.hashers import make_password

from activity.models import Activity, ActivityStatistics

# Scraping tools
import random
import json
from django.contrib.auth.models import User
from faker import Factory
fake = Factory.create()

activities = ['Swimming', 'Cooking', 'Sleeping', 'Hiking', 'Bird Watching', 'Play Soccer', 'Running', 'Cycling']

class Command(BaseCommand):
    # this is a requirement for any admin command to extend BaseCommand
    help = 'Closes the specified poll for voting'

    def add_arguments(self, parser):
        parser.add_argument('number', nargs='+', type=int)

    def handle(self, *args, **options):
        number = int(options['number'][0])
        print(options['number'])
        
        for i in range(number):
            print("Creating user {} of {}".format(i+1, number))
            user = User()
            user.username = self.get_username()
            user.first_name = self.get_username().capitalize()
            user.last_name = self.get_username().capitalize()
            user.password = make_password("password")
            user.email = fake.email()
            user.save()
        print("Done. Created {} users".format(i+1))

        print("==================================UserActivities=========================")
        users = User.objects.all()
        for user in users:            
            for activiti in activities:
                activity = Activity()
                activity.owner = user
                activity.activity_name = activiti
                activity.save()
                
        print("=================Statistics======================")
        
        user_activities = Activity.objects.all()
        for i in range(10):
            print("Activities round {}".format(i))
            for activity in user_activities:
                print("User {}".format(activity.owner.username))
                activity_stat = ActivityStatistics()
                activity_stat.activity = activity
                activity_stat.owner = activity.owner
                activity_stat.value = random.randint(3, 20)
                activity_stat.statistics_date = fake.date()
                activity_stat.save()

            
    def get_username(self):
        name = fake.name().split()[-1].lower()
        if User.objects.filter(username=name):
            return self.get_username()
        else:
            return name
        
