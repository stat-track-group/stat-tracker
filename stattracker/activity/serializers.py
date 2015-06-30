from rest_framework import serializers
from django.contrib.auth.models import User
from activity.models import Activity, ActivityStatistics


class ActivitySerializer(serializers.HyperlinkedModelSerializer):
    #owner = serializers.RelatedField(User)
    class Meta:
        model = Activity
        fields = ('id', 'url', 'activity_name', 'description')


class ActivityStatsSerializer(serializers.HyperlinkedModelSerializer):
    
    class Meta:
        model = Activity
        fields = ('id', 'url', 'activity_name', 'description')

        
class StatisticsSerializer(serializers.HyperlinkedModelSerializer):
    
    class Meta:
        model = ActivityStatistics
        fields = ('id', 'url', 'activity', 'value', 'statistics_date')


class UserSerializer(serializers.HyperlinkedModelSerializer):
    
    class Meta:
        model = User
        fields = ('id', 'url', 'username', 'first_name', 'last_name', 'password')
