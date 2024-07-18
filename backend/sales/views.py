from django.shortcuts import get_object_or_404
from .models import Purchase, Book
from .serializers import BookSerializer, PurchaseSerializer
from rest_framework import status, response, viewsets

# Create your views here.


class PurchaseView(viewsets.GenericViewSet):
    serializer_class = PurchaseSerializer
    queryset = Purchase.objects.all()

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
class BookView(viewsets.GenericViewSet):
    serializer_class = BookSerializer
    queryset = Book.objects.all()

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
