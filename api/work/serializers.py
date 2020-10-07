from rest_framework.serializers import ModelSerializer, Serializer
from rest_framework import serializers
from .models import TodoGroup, Todo, FavoriteGroup, Favorite


class TodoGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = TodoGroup
        fields = '__all__'


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = '__all__'



class FavoriteGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = FavoriteGroup
        fields = '__all__'

class FavoriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favorite
        fields = '__all__'



