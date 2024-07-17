from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import PostView, TagView, CommentsView, AnswerView, QuestionView

router = DefaultRouter()
router.register(r'answers', AnswerView, basename='answer')
router.register(r'comments', CommentsView, basename='comment')
router.register(r'posts', PostView, basename='post')
router.register(r'questions', QuestionView, basename='question')
router.register(r'tags', TagView, basename='tag')

urlpatterns = router.urls
