from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Account, StudentProfile, LecturerProfile, NormalUser
# Register your models here.


class AccountAdmin(UserAdmin):
    fieldsets = (
        (None, {'fields': ('email', 'username', 'password')}),
        ('Personal info', {'fields': ('first_name', 'last_name')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser',
                                    'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'first_name', 'last_name', 'password1', 'password2'),
        }),
    )
    list_display = ('email', 'username', 'first_name', 'last_name', 'is_staff')
    search_fields = ('first_name', 'last_name', 'email')
    ordering = ('email',)

    # Exclude 'last_login' from the form
    readonly_fields = ('last_login', 'date_joined')


class StudentProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'level', 'department', 'faculty', 'user_id')
    search_fields = ('user__email', 'level', 'department', 'faculty')
    list_filter = ('level', 'department', 'faculty')


class LecturerProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'title', 'phone', 'department',
                    'faculty', 'years_of_experience', 'user_id')
    search_fields = ('user__email', 'title', 'phone', 'department', 'faculty')
    list_filter = ('title', 'department', 'faculty')


class NormalUserProfileAdmin(admin.ModelAdmin):
    list_display = ("user", )
    search_fields = ('user__email', 'title', 'phone', 'department', 'faculty')


admin.site.register(Account, AccountAdmin)
admin.site.register(StudentProfile, StudentProfileAdmin)
admin.site.register(LecturerProfile, LecturerProfileAdmin)
admin.site.register(NormalUser, NormalUserProfileAdmin)
