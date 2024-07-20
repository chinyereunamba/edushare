from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from base.urls import router as base_router
from sales.urls import router as sales_router


class CombinedRouter(DefaultRouter):
    def extend(self, router):
        self.registry.extend(router.registry)


router = CombinedRouter()
router.extend(base_router)
router.extend(sales_router)


urlpatterns = [
    path("admin/", admin.site.urls),
    path('auth/', include('allauth.urls')),
    path('api/', include(router.urls)),
    path("api/auth/", include('users.urls')),
    path("api/auth/", include("dj_rest_auth.urls"), name="accounts"),
    path('api/auth/register/', include('dj_rest_auth.registration.urls')),
]
