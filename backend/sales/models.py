from django.db import models
from users.models import LecturerProfile
from django.contrib.auth import get_user_model
# Create your models here.

User = get_user_model()


class Book(models.Model):
    seller = models.OneToOneField(LecturerProfile, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField(max_length=255)
    author = models.CharField(max_length=125)
    file = models.FileField(upload_to='files')
    price = models.PositiveIntegerField(null=False, blank=False)
    added_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Purchase(models.Model):
    buyer = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    book = models.ForeignKey(
        Book, on_delete=models.CASCADE, related_name='Purchase')
    purchased = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.book} purchased by {self.buyer}'
