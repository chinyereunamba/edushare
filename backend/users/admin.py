from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Account, StudentProfile, LecturerProfile
# Register your models here.


class AccountAdmin(UserAdmin):
    list_display = ['email', "first_name", "last_name",
                    "is_active", "last_login", "date_joined"]
    search_fields = ["email", "first_name", "last_name"]


class StudentProfileAdmin(admin.ModelAdmin):
    # list_display = ["level"]
    filter_horizontal = ['level']

class LecturerProfileAdmin(admin.ModelAdmin):
    pass

admin.site.register(Account, AccountAdmin)
admin.site.register(StudentProfile,)
admin.site.register(LecturerProfile)
