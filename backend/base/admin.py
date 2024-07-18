from django.contrib import admin
from .models import Post, Answer,Comment, Question, Tag

# Register your models here.


class PostAdmin(admin.ModelAdmin):
    list_display = ['post_content', 'author', 'created_at', 'updated_at']
    search_fields = ['author', 'post_content']
    list_filter = ['author']


class CommentAdmin(admin.ModelAdmin):
    list_display = ['author', 'post', 'created_at', 'updated_at']
    list_filter = ['author', 'post']


class TagAdmin(admin.ModelAdmin):
    list_display = ['tag', 'created_at']


class QuestionAdmin(admin.ModelAdmin):
    list_display = ['author', 'title', 'answered', "created_at", "updated_at"]
    list_filter = ['author', 'answered']


class AnswerAdmin(admin.ModelAdmin):
    list_display = ['author', 'best_answer', 'question']
    list_filter = ['author', 'best_answer',]


admin.site.register(Post, PostAdmin)
admin.site.register(Comment, CommentAdmin)
admin.site.register(Tag, TagAdmin)
admin.site.register(Question, QuestionAdmin)
admin.site.register(Answer, AnswerAdmin)
