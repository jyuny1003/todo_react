from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('todogroup', views.TodoGroupViewSet)
router.register('todo', views.TodoViewSet)
router.register('favoritegroup', views.FavoriteGroupViewSet)
router.register('favorite', views.FavoriteViewSet)


urlpatterns = [
    path('', include(router.urls))
]

