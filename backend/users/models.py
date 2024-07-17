from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractUser, Group, Permission
from django.utils.translation import gettext_lazy as _
# Create your models here.


class UserManager(BaseUserManager):
    """
    A custom user manager for the Django application.

    This class extends the BaseUserManager provided by Django and overrides the
    create_user and create_superuser methods to customize the creation of user
    instances.

    Methods:
    create_user: Creates a regular user with the provided email and password.
    create_superuser: Creates a superuser with the provided email and password.
    """

    def create_user(self, email, password=None, **extra_fields):
        """
        Creates a regular user with the provided email and password.

        Args:
        email (str): The email address of the user.
        password (str, optional): The password for the user. Defaults to None.
        extra_fields (dict, optional): Additional fields to be included in the user's profile.

        Returns:
        User: The newly created user instance.
        """
        if not email:
            raise ValueError("All users must have an email address")

        user = self.model(
            email=self.normalize_email(email=email.lower()),
            **extra_fields
        )
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email,  **extra_fields):
        """
        Creates a superuser with the provided email and password.

        Args:
        email (str): The email address of the superuser.
        extra_fields (dict, optional): Additional fields to be included in the superuser's profile.

        Returns:
        User: The newly created superuser instance.
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')
        user = self.create_user(
            email=email,
            **extra_fields)

        user.save()
        return user


class Account(AbstractUser):
    """
    A custom user model for the Django application.

    Attributes:
    email: EmailField representing the user's email address.
    first_name: CharField representing the user's first name.
    last_name: CharField representing the user's last name.
    last_login: DateTimeField representing the user's last login timestamp.
    date_joined: DateTimeField representing the user's registration timestamp.
    is_active: BooleanField indicating whether the user is active or not.
    is_staff: BooleanField indicating whether the user is a staff member or not.
    is_superuser: BooleanField indicating whether the user is a superuser or not.
    groups: ManyToManyField representing the user's groups.
    user_permissions: ManyToManyField representing the user's specific permissions.

    Methods:
    __str__: Returns a string representation of the user's email address.

    Meta:
    ordering: Ordering of the user instances in the admin interface.
    verbose_name: Verbose name of the model in the admin interface.
    """
    email = models.EmailField(
        _("Email"), max_length=125, blank=False, null=False, unique=True)
    first_name = models.CharField(
        _("First name"), max_length=30, blank=True)
    last_name = models.CharField(_("Last name"), max_length=30, blank=True)

    last_login = models.DateTimeField(auto_now=True, blank=True)
    date_joined = models.DateTimeField(auto_now_add=True, blank=True)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

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
        """
        Meta options for the Account model.

        Attributes:
        ordering: A list of field names that specifies the default ordering of objects returned by the model's manager.
        verbose_name: A string representing the verbose name of the model in the admin interface.

        """
        ordering = ["email"]
        verbose_name = 'User'


class Profile(models.Model):
    """
    A model representing a user's profile.

    Attributes:
    user: A OneToOneField linking to the Account model, representing the user associated with this profile.
    bio: A TextField for storing the user's biography. It can be left blank or null.
    user_id: A UUIDField for storing a unique identifier for the user. It can be left blank or null.
    profile_image: An ImageField for storing the user's profile image. It can be left blank or null.
    institution: A CharField for storing the user's institution. It cannot be left blank or null.
    department: A CharField for storing the user's department. It cannot be left blank or null.
    faculty: A CharField for storing the user's faculty. It cannot be left blank or null.

    Methods:
    None

    Meta:
    abstract: A boolean indicating that this model is abstract and should not be used to create database tables.
    """

    user = models.OneToOneField(Account, on_delete=models.CASCADE)
    bio = models.TextField(blank=True, null=True)
    user_id = models.UUIDField(
        unique=True, max_length=15, blank=True, null=True)
    profile_image = models.ImageField(
        upload_to="images", blank=True, null=True)
    institution = models.CharField(max_length=225, blank=True, null=True)
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
    """
    A model representing a student's profile.

    Attributes:
    level: A CharField representing the student's level of study.
    year_of_entry: A DateField representing the year the student started studying.
    graduation_year: A DateField representing the year the student is expected to graduate.

    Methods:
    __str__: Returns a string representation of the student's profile.

    Meta:
    verbose_name: A string representing the verbose name of the model.
    """
    level = models.CharField(choices=LEVELS, max_length=100, blank=False)
    year_of_entry = models.DateField(blank=True, null=True)
    graduation_year = models.DateField(blank=True, null=True)

    def __str__(self) -> str:
        return self.user.email

    class Meta:
        verbose_name = "Student Profile"


class LecturerProfile(Profile):
    """
    A model representing a lecturer's profile.

    Attributes:
    title: A CharField representing the lecturer's title.
    phone: A CharField representing the lecturer's phone number.
    years_of_experience: A PositiveIntegerField representing the lecturer's years of experience.

    Methods:
    __str__: Returns a string representation of the lecturer's profile.

    Meta:
    verbose_name: A string representing the verbose name of the model.
    """
    title = models.CharField(max_length=100, )
    phone = models.CharField(max_length=20, blank=False, null=False)
    years_of_experience = models.PositiveIntegerField(default=0)

    def __str__(self) -> str:
        return self.user.email

    class Meta:
        verbose_name = "Lecturer Profile"


class NormalUser(models.Model):
    user = models.OneToOneField(Account, on_delete=models.CASCADE)
    bio = models.TextField(blank=True, null=True)
    unique_id = models.UUIDField(
        unique=True, max_length=15, blank=True, null=True)
    profile_image = models.ImageField(
        upload_to="images", blank=True, null=True)
    
    def __str__(self) -> str:
        return self.user.email
    
    class Meta:
        verbose_name = "Normal User Profile"

    
    