from django.shortcuts import render
from rest_framework import status, response, viewsets
from .models import *
from .serializers import *
# Create your views here.


class UserView(viewsets.GenericViewSet):
    serializer_class = UserSerializer
    queryset = Account.objects.all()

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
