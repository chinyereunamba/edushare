from django.db import models
from django.contrib.auth import get_user_model
from django.utils.text import slugify

# Create your models here.

User = get_user_model()


class CreateUpdate(models.Model):
    author = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    created_at = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, blank=True, null=True)

    class Meta:
        abstract = True


class Tag(models.Model):
    tag = models.CharField(max_length=25)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.tag


class Post(CreateUpdate):
    title = models.CharField(max_length=125, blank=False, null=False)
    description = models.TextField(max_length=255, blank=True, null=True)
    post_content = models.TextField(blank=False, null=False)
    tags = models.ManyToManyField(Tag)

    slug = models.SlugField(max_length=255, blank=True, null=True)

    def save(self, *args, **kwargs):
        if self.slug == None:
            slug = slugify(self.title)
            has_slug = Post.objects.filter(slug=slug).exists()
            count = 0

            while has_slug:
                count += 1
                slug = slugify(self.title + "-" + str(count))
                has_slug = Post.objects.filter(slug=slug).exists()

            self.slug = slug

        super().save(*args, **kwargs)

    def __str__(self) -> str:
        return self.title


class Comment(CreateUpdate):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    comment = models.TextField(blank=False, null=False)

    def __str__(self):
        return self.author


class Question(CreateUpdate):
    title = models.CharField(max_length=125, blank=False, null=False)
    question = models.TextField(blank=False, null=False)
    tags = models.ManyToManyField(Tag)
    answered = models.BooleanField(default=False)
    slug = models.SlugField(blank=True, null=True)

    def __str__(self) -> str:
        return self.title
    
    def save(self, *args, **kwargs):
        if self.slug == None:
            slug = slugify(self.title)
            has_slug = Question.objects.filter(slug=slug).exists()
            count = 0

            while has_slug:
                count += 1
                slug = slugify(self.title + "-" + str(count))
                has_slug = Question.objects.filter(slug=slug).exists()

            self.slug = slug

        super().save(*args, **kwargs)


class Answer(CreateUpdate):
    question = models.OneToOneField(Question, on_delete=models.CASCADE)
    best_answer = models.BooleanField(default=False)
    answer = models.TextField(blank=False, null=False)

    def __str__(self):
        return self.answer
