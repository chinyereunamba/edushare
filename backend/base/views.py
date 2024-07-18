from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.viewsets import GenericViewSet
from rest_framework.response import Response
from .serializers import TagSerializer, AnswerSerializer, CommentSerializer, PostSerializer, QuestionSerializer
from .models import Question, Comment,Answer,Tag, Post

# Create your views here.


class PostView(GenericViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def list(self, request):
        serializer = self.get_serializer(self.get_queryset(), many=True)
        # return self.get_paginated_response(
        #     self.paginate_queryset(serializer.data)
        # )
        return Response(serializer.data, status=status.HTTP_200_OK)

    def retrieve(self, request, pk=None):
        post = self.get_object()
        serializer = self.get_serializer(post)
        return Response(serializer.data)

    def update(self, request, pk=None):
        post = self.get_object()
        serializer = self.get_serializer(post, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

    def destroy(self, request, pk=None):
        post = self.get_object()
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


post_list = PostView.as_view({"get": "list"})
post_detail = PostView.as_view({"get": "retrieve"})
delete_post = PostView.as_view({"delete": "delete"})
update_post = PostView.as_view({"update": "partial_update"})
create_post = PostView.as_view({"create": "create"})


class TagView(GenericViewSet):
    serializer_class = TagSerializer
    queryset = Tag.objects.all()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def list(self, request):
        serializer = self.get_serializer(self.get_queryset(), many=True)
        return Response(serializer.data)

    def destroy(self, request, pk):
        tag = self.get_object()
        tag.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class CommentsView(GenericViewSet):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def list(self, request):
        serializer = self.get_serializer(self.get_queryset(), many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def update(self, request, pk=None):
        post = self.get_object()
        serializer = self.get_serializer(post, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

    def destroy(self, request, pk=None):
        post = self.get_object()
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class QuestionView(GenericViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def list(self, request):
        serializer = self.get_serializer(self.get_queryset(), many=True)
        # return self.get_paginated_response(
        #     self.paginate_queryset(serializer.data)
        # )
        return Response(serializer.data, status=status.HTTP_200_OK)

    def retrieve(self, request, pk=None):
        post = self.get_object()
        serializer = self.get_serializer(post)
        return Response(serializer.data)

    def update(self, request, pk=None):
        post = self.get_object()
        serializer = self.get_serializer(post, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

    def destroy(self, request, pk=None):
        post = self.get_object()
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class AnswerView(GenericViewSet):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def list(self, request):
        serializer = self.get_serializer(self.get_queryset(), many=True)
        # return self.get_paginated_response(
        #     self.paginate_queryset(serializer.data)
        # )
        return Response(serializer.data, status=status.HTTP_200_OK)

    def retrieve(self, request, pk=None):
        post = self.get_object()
        serializer = self.get_serializer(post)
        return Response(serializer.data)

    def update(self, request, pk=None):
        post = self.get_object()
        serializer = self.get_serializer(post, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

    def destroy(self, request, pk=None):
        post = self.get_object()
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
