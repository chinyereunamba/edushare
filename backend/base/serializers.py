from rest_framework.serializers import ModelSerializer
from .models import *


class PostSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = "__all__"


class TagSerializer(ModelSerializer):
    class Meta:
        model = Tag
        fields = "__all__"


class CommentSerializer(ModelSerializer):
    class Meta:
        model = Comment
        fields = "__all__"


class QuestionSerializer(ModelSerializer):
    class Meta:
        model = Question
        fields = "__all__"


class AnswerSerializer(ModelSerializer):
    class Meta:
        model = Answer
        fields = "__all__"
