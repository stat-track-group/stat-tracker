"""stattracker URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.contrib import admin
from django.views.generic import TemplateView

from rest_framework import routers

from activity import views

router = routers.DefaultRouter()
router.register(r'activities', views.ActivityViewSet, base_name='activities')
router.register(r'stats', views.StatisticsViewSet, base_name='activitystatistics')
router.register(r'users', views.UserViewSet, base_name="user")

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^tracker/$', TemplateView.as_view(template_name="index.html")),
    
    url(r'^api/', include(router.urls)),
    url(r'^api/activities/(?P<pk>\d+)/$', views.ActivityDetailView.as_view(), name='activity-detail'),
    url(r'^api/stats/(?P<pk>\d+/$)', views.StatisticsDetailView.as_view(), name='activitystatistics'),
    url(r'^api/users/(?P<pk>\d+/$)', views.UserDetailView.as_view(), name='user-detail'),
    url(r'^api/activities/(?P<pk>\d+)/stats/$', views.StatisticsView.as_view()),
    
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^login/$', 'django.contrib.auth.views.login'),
    url(r'^logout/$', 'django.contrib.auth.views.logout', {'next_page': '/tracker/#/'}),
    ]
