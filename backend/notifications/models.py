from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.

User = get_user_model()


class Notification(models.Model):
    user = models.ForeignKey(
        User, related_name='notifications', on_delete=models.CASCADE)
    message = models.CharField(max_length=75, blank=False, null=False)
    read = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.message
    
    class Meta:
        ordering = ['-created']