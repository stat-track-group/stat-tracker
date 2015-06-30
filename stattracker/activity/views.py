from rest_framework import viewsets, permissions, generics
from rest_framework.exceptions import PermissionDenied
from django.contrib.auth.hashers import make_password
from activity.serializers import ActivitySerializer, StatisticsSerializer, UserSerializer, ActivityStatsSerializer
from django.contrib.auth.models import User
from activity.models import Activity, ActivityStatistics
from activity.permissions import IsOwnerOrReadOnly

# Create your views here.

class ActivityViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated, IsOwnerOrReadOnly)        
    serializer_class = ActivitySerializer
    
    def get_queryset(self):
        return Activity.objects.filter(owner = self.request.user)
    
    def perform_create(self, serializer):
        serializer.save(owner = self.request.user)


class ActivityDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.IsAuthenticated, IsOwnerOrReadOnly)
    serializer_class = ActivitySerializer

    
class StatisticsDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.IsAuthenticated, IsOwnerOrReadOnly)
    serializer_class = StatisticsSerializer   


class StatisticsView(generics.ListAPIView):
    permission_classes = (permissions.IsAuthenticated, IsOwnerOrReadOnly)
    serializer_class = ActivityStatsSerializer
    
    def get_queryset(self, **kwargs):
        return ActivityStatistics.objects.filter(owner = self.request.user, activity__id = self.kwargs['pk'])

    
class StatisticsViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated, IsOwnerOrReadOnly)
    serializer_class = StatisticsSerializer

    def get_queryset(self):
        return ActivityStatistics.objects.filter(owner = self.request.user)

    def perform_create(self, serializer):
        serializer.save(owner = self.request.user)


class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.IsAuthenticated)
    serializer_class = UserSerializer
    
    def get_queryset(self):
        return User.objects.filter(id = self.request.user.id)    


class UserViewSet(viewsets.ModelViewSet):
    #permission_classes = (permissions.IsAuthenticated)
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
    def get_queryset(self):
        return User.objects.filter(id = self.request.user.id)
    
    def perform_create(self, serializer):
        serializer.save(password = make_password(self.request.POST['password']))
