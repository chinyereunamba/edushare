from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractUser, Group, Permission
from django.utils.translation import gettext_lazy as _
from datetime import datetime
# Create your models here.


class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("All users must have an email address")

        user = self.model(
            email=self.normalize_email(email=email.lower()),
            **extra_fields
        )
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, **extra_fields):

        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')
        user = self.create_user(email=email, **extra_fields)

        user.save()
        return user


class Account(AbstractUser):
    email = models.EmailField(
        _("Email"), max_length=125, blank=False, null=False, unique=True)
    first_name = models.CharField(_("First name"), max_length=30, blank=True)
    last_name = models.CharField(_("Last name"), max_length=30, blank=True)

    last_login = models.DateTimeField(auto_now=True, blank=True)
    date_joined = models.DateTimeField(auto_now_add=True, blank=True)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)\
    

    groups = models.ManyToManyField(
        Group,
        related_name='account_set',  # Change this related_name
        blank=True,
    )

    user_permissions = models.ManyToManyField(
        Permission,
        related_name='account_permission_set',  # Change this related_name
        blank=True,
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = UserManager()

    def __str__(self):
        return self.email

    class Meta:
        ordering = ["email"]
        verbose_name = 'User'


class Profile(models.Model):
    user = models.OneToOneField(Account, on_delete=models.CASCADE)
    bio = models.TextField(blank=True, null=True)
    user_id = models.UUIDField(unique=True, max_length=15, blank=True, null=True)
    profile_image = models.ImageField(
        upload_to="images", blank=True, null=True)
    department = models.CharField(max_length=255, blank=False, null=False)
    faculty = models.CharField(max_length=225, blank=False, null=False)

    class Meta:
        abstract = True


LEVELS = [
    ("100 Level", "100 Level"),
    ("200 Level", "200 Level"),
    ("300 Level", "300 Level"),
    ("400 Level", "400 Level"),
    ("500 Level", "500 Level"),
    ("600 Level", "600 Level"),
    ("700 Level", "700 Level"),
]


class StudentProfile(Profile):
    level = models.CharField(choices=LEVELS, max_length=100, blank=False)
    graduation_year = models.DateField(default=datetime.now())

    
    def __str__(self):
        return self.user.email
    
    class Meta:
        verbose_name = "Student Profile"


class LecturerProfile(Profile):
    title = models.CharField(max_length=100, )
    phone = models.CharField(max_length=20, blank=False, null=False)
    years_of_experience = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.user.email
    
    class Meta:
        verbose_name = "Lecturer Profile"
