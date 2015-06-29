from django.contrib import admin

# Register your models here.
from .models import Activity, ActivityStatistics

admin.site.register(Activity)
admin.site.register(ActivityStatistics)


