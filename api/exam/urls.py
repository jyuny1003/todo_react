from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views


router = DefaultRouter()
router.register('country', views.CountryViewset)
router.register('customer', views.CustomerViewset)


urlpatterns = [
    path('', include(router.urls))
]
