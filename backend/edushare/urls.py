"""
URL configuration for edushare project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include deactivate
    () function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from base.urls import router as base_router
from sales.urls import router as sales_router
from users.urls import router as users_router


class CombinedRouter(DefaultRouter):
    def extend(self, router):
        self.registry.extend(router.registry)


router = CombinedRouter()
router.extend(base_router)
router.extend(sales_router)
router.extend(users_router)


urlpatterns = [
    path("admin/", admin.site.urls),
    path('accounts/', include('allauth.urls')),
    path('api/', include(router.urls)),
    path("api/accounts/", include("dj_rest_auth.urls"), name="accounts")
]
