from django.contrib import admin
from .models import *

# Register your models here.

class NotificationAdmin(admin.ModelAdmin):
    list_display = ['message', 'read', 'user']
    list_filter = ['read']

admin.site.register(Notification, NotificationAdmin)