from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register(r'users', UserView, basename='users')
router.register(r'lecturers', LecturerView, basename='lecturers')
router.register(r'students', StudentView, basename='students')
router.register(r'guests', NormalUserView, basename='guests')

urlpatterns = router.urls