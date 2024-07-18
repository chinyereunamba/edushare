from rest_framework.routers import DefaultRouter
from .views import PurchaseView, BookView

router = DefaultRouter()
router.register(r'purchases', PurchaseView, basename='purchase')
router.register(r'books', BookView, basename='book')


urlpatterns = router.urls
