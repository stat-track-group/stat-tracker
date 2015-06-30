from rest_framework import viewsets, permissions, generics
from rest_framework.exceptions import PermissionDenied
from django.contrib.auth.hashers import make_password
from activity.serializers import ActivitySerializer, StatisticsSerializer, UserSerializer
from django.contrib.auth.models import User
from activity.models import Activity, ActivityStatistics
from activity.permissions import IsOwnerOrReadOnly

# Create your views here.

class ActivityViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated, IsOwnerOrReadOnly)    
    queryset = Activity.objects.all() # list all the activities
    serializer_class = ActivitySerializer
    def perform_create(self, serializer):
        serializer.save(owner = self.request.user)


class ActivityDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.IsAuthenticated, IsOwnerOrReadOnly)
    serializer_class = ActivitySerializer   
    queryset = Activity.objects.all()


class ActivityStatsView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.IsAuthenticated, IsOwnerOrReadOnly)
    serializer_class = ActivitySerializer
    queryset = Activity.objects.all()

    
class StatisticsDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.IsAuthenticated, IsOwnerOrReadOnly)
    serializer_class = StatisticsSerializer
    queryset = ActivityStatistics.objects.all()

class StatisticsViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated, IsOwnerOrReadOnly)
    queryset = ActivityStatistics.objects.all() 
    serializer_class = StatisticsSerializer

    def perform_create(self, serializer):
        serializer.save(owner = self.request.user)


class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.IsAuthenticated)
    serializer_class = UserSerializer
    queryset = User.objects.all()

class UserViewSet(viewsets.ModelViewSet):
    #permission_classes = (permissions.IsAuthenticated)
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def perform_create(self, serializer):
        serializer.save(password = make_password(self.request.POST['password']))
