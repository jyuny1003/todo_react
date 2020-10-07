from rest_framework.serializers import Serializer, ModelSerializer
from rest_framework import serializers
from .models import Country, Customer


class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = '__all__'

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'

        