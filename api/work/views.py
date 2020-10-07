from django.shortcuts import render
from django.urls import path, include
from .models import TodoGroup, Todo, FavoriteGroup, Favorite
from .serializers import TodoGroupSerializer, TodoSerializer, FavoriteGroupSerializer, FavoriteSerializer
from rest_framework import viewsets

# Create your views here.


class TodoGroupViewSet(viewsets.ModelViewSet):
    queryset = TodoGroup.objects.all()
    serializer_class = TodoGroupSerializer


class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        status = self.request.query_params.get('status')
        if status:
            qs = qs.filter(status=status)
        return qs

class FavoriteGroupViewSet(viewsets.ModelViewSet):
    queryset =  FavoriteGroup.objects.all()
    serializer_class = FavoriteGroupSerializer


class FavoriteViewSet(viewsets.ModelViewSet):
    queryset = Favorite.objects.all()
    serializer_class = FavoriteSerializer
    
    def get_queryset(self):
        qs = super().get_queryset()
        group = self.request.query_params.get('group')
        if group:
            qs = qs.filter(group=group)
        return qs
    