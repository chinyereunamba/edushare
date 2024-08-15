from django.test import TestCase
from django.contrib.auth import get_user_model
from .models import StudentProfile, LecturerProfile, NormalUser

# Create your tests here.

User = get_user_model()


class UserManagerTests(TestCase):
    def test_create_user(self):
        user = User.objects.create_user(
            email="testuser@example.com", password="testpass123"
        )
        self.assertEqual(user.email, "testuser@example.com")
        self.assertTrue(user.check_password("testpass123"))
        self.assertFalse(user.is_staff)
        self.assertFalse(user.is_superuser)

    def test_create_superuser(self):
        superuser = User.objects.create_superuser(
            email="admin@example.com", password="adminpass123"
        )
        self.assertEqual(superuser.email, "admin@example.com")
        self.assertTrue(superuser.check_password("adminpass123"))
        self.assertTrue(superuser.is_staff)
        self.assertTrue(superuser.is_superuser)

    def test_create_user_without_email(self):
        with self.assertRaises(ValueError):
            User.objects.create_user(email=None, password="testpass123")


class ProfileTests(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            email="student@example.com", password="studentpass123"
        )
        self.lecturer_user = User.objects.create_user(
            email="lecturer@example.com", password="lecturerpass123"
        )
        self.normal_user = User.objects.create_user(
            email="normal@example.com", password="normalpass123"
        )

    def test_student_profile_creation(self):
        student_profile = StudentProfile.objects.create(
            user=self.user,
            level="100 Level",
            year_of_entry="2023-01-01",
            graduation_year="2027-01-01",
        )
        self.assertEqual(str(student_profile), self.user.email)
        self.assertEqual(student_profile.level, "100 Level")

    def test_lecturer_profile_creation(self):
        lecturer_profile = LecturerProfile.objects.create(
            user=self.lecturer_user,
            phone="1234567890",
        )
        self.assertEqual(str(lecturer_profile), self.lecturer_user.email)
        self.assertEqual(lecturer_profile.phone, "1234567890")

    def test_normal_user_creation(self):
        normal_user = NormalUser.objects.create(
            user=self.normal_user,
            bio="This is a normal user bio.",
        )
        self.assertEqual(str(normal_user), self.normal_user.email)
        self.assertEqual(normal_user.bio, "This is a normal user bio.")
