from django.http import Http404
from django.db import models
from django.conf import settings
import random
from django.shortcuts import render
from rest_framework import status, response, viewsets
from .models import Account, LecturerProfile, StudentProfile, NormalUser
from .serializers import (
    UserSerializer,
    LecturerProfileSerializer,
    NormalUserSerializer,
    StudentProfileSerializer,
)

# Create your views here.

from dj_rest_auth.views import LoginView
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from rest_framework.permissions import AllowAny


class GoogleLogin(LoginView):
    adapter_class = GoogleOAuth2Adapter
    permission_classes = (AllowAny,)


class UserView(viewsets.GenericViewSet):
    serializer_class = UserSerializer
    queryset = Account.objects.all()

    def list(self, request):
        serializer = self.get_serializer(self.get_queryset(), many=True)
        return response.Response(serializer.data)

    def retrieve(self, request, pk=None):
        post = self.get_object()
        serializer = self.get_serializer(post)
        return response.Response(serializer.data)

    def update(self, request, pk=None):
        post = self.get_object()
        serializer = self.get_serializer(post, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return response.Response(serializer.data, status=status.HTTP_200_OK)

    def destroy(self, request, pk=None):
        post = self.get_object()
        post.delete()
        return response.Response(status=status.HTTP_204_NO_CONTENT)


class LecturerView(viewsets.GenericViewSet):
    serializer_class = LecturerProfileSerializer
    queryset = LecturerProfile.objects.all()

    def list(self, request):
        serializer = self.get_serializer(self.get_queryset(), many=True)
        return response.Response(serializer.data)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return response.Response(serializer.data, status=status.HTTP_201_CREATED)

    def retrieve(self, request, pk=None):
        post = self.get_object()
        serializer = self.get_serializer(post)
        return response.Response(serializer.data)

    def update(self, request, pk=None):
        post = self.get_object()
        serializer = self.get_serializer(post, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return response.Response(serializer.data, status=status.HTTP_200_OK)

    def destroy(self, request, pk=None):
        post = self.get_object()
        post.delete()
        return response.Response(status=status.HTTP_204_NO_CONTENT)


class StudentView(viewsets.GenericViewSet):
    serializer_class = StudentProfileSerializer
    queryset = StudentProfile.objects.all()

    def list(self, request):
        serializer = self.get_serializer(self.get_queryset(), many=True)
        return response.Response(serializer.data)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return response.Response(serializer.data, status=status.HTTP_201_CREATED)

    def retrieve(self, request, pk=None):
        post = self.get_object()
        serializer = self.get_serializer(post)
        return response.Response(serializer.data)

    def update(self, request, pk=None):
        post = self.get_object()
        serializer = self.get_serializer(post, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return response.Response(serializer.data, status=status.HTTP_200_OK)

    def destroy(self, request, pk=None):
        post = self.get_object()
        post.delete()
        return response.Response(status=status.HTTP_204_NO_CONTENT)


class NormalUserView(viewsets.GenericViewSet):
    serializer_class = NormalUserSerializer
    queryset = NormalUser.objects.all()

    def list(self, request):
        serializer = self.get_serializer(self.get_queryset(), many=True)
        return response.Response(serializer.data)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return response.Response(serializer.data, status=status.HTTP_201_CREATED)

    def retrieve(self, request, pk=None):
        post = self.get_object()
        serializer = self.get_serializer(post)
        return response.Response(serializer.data)

    def update(self, request, pk=None):
        post = self.get_object()
        serializer = self.get_serializer(post, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return response.Response(serializer.data, status=status.HTTP_200_OK)

    def destroy(self, request, pk=None):
        post = self.get_object()
        post.delete()
        return response.Response(status=status.HTTP_204_NO_CONTENT)


def generate_activation_code():
    return "".join(
        random.choice(string.ascii_uppercase + string.digits) for x in range(6)
    )


class ActivationCode(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.PROTECT)
    code = models.CharField(max_length=6, default=generate_activation_code)


def register_user(request):
    # create your `new_user` however you see fit
    code = ActivationCode.objects.create(user=new_user)
    send_mail(
        "Activate Your Account",
        "Here is the activation code: %s" % code,
        "from@example.com",
        [user.email],
    )
    render(request, "activation_sent.html")


def check_activation_code(request, code):
    try:
        ActivationCode.objects.get(code=code)
        # ... All set, activate & login the user, & delete the activation code
    except ActivationCode.DoesNotExist:
        raise Http404

    return render(request, "welcome.html")
