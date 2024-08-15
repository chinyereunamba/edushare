from django.test import TestCase
from django.contrib.auth import get_user_model
from .models import Tag, Post, Comment, Question, Answer

User = get_user_model()

class ContentModelTest(TestCase):
    def setUp(self):
        self.tag = Tag.objects.create(tag="django")
        self.user = User.objects.create(email="test@mail.com", password="test123")

    def test_tag_creation(self):
        self.assertEqual(self.tag.tag, "django")

    def test_post_creation(self):
        post = Post.objects.create(
            author=self.user, title="Test Post", post_content="This is a test post."
        )
        post.tags.add(self.tag)
        self.assertEqual(post.title, "Test Post")
        self.assertIn(self.tag, post.tags.all())

    def test_comment_creation(self):
        post = Post.objects.create(
            author=self.user, title="Test Post", post_content="This is a test post."
        )
        comment = Comment.objects.create(
            author=self.user, post=post, comment="This is a test comment"
        )
        self.assertEqual(comment.comment, "This is a test comment")
        self.assertNotEqual(comment.comment, "This is a test comment.")
        self.assertEqual(comment.post, post)

    def test_question_creation(self):
        question = Question.objects.create(
            author=self.user, title="Test Question", question="What is Django?"
        )
        question.tags.add(self.tag)
        self.assertEqual(question.title, "Test Question")
        self.assertIn(self.tag, question.tags.all())

    def test_answer_creation(self):
        question = Question.objects.create(
            author=self.user, title="Test Question", question="What is Django?"
        )
        answer = Answer.objects.create(
            author=self.user, question=question, answer="Django is a web framework."
        )
        self.assertEqual(answer.answer, "Django is a web framework.")
        self.assertEqual(answer.question, question)
