from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import Account, LecturerProfile, StudentProfile, NormalUser


class UserSerializer(ModelSerializer):
    class Meta:
        model = Account
        fields = ["id", 'email', "first_name", "last_name",
                  'last_login', 'date_joined', 'is_active', 'is_superuser', ]


class StudentProfileSerializer(ModelSerializer):
    class Meta:
        model = StudentProfile
        fields = "__all__"


class LecturerProfileSerializer(ModelSerializer):
    class Meta:
        model = LecturerProfile
        fields = "__all__"


class NormalUserSerializer(ModelSerializer):
    class Meta:
        model = NormalUser
        fields = "__all__"
