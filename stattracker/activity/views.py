from rest_framework import viewsets, permissions, generics
from rest_framework.exceptions import PermissionDenied

from activity.serializers import ActivitySerializer, StatisticsSerializer
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
    queryset = ActivityStatistics.objects.all() # list all the books
    serializer_class = StatisticsSerializer

    #this is responsible for displaying the last page where we have
    # details about a stat
    def perform_create(self, serializer):
        serializer.save(owner = self.request.user)
