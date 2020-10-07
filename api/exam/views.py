from django.shortcuts import render
from django.urls import path, include
from .models import Country, Customer
from .serializers import CountrySerializer, CustomerSerializer
from rest_framework import viewsets
# Create your views here.


class CountryViewset(viewsets.ModelViewSet):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer

class CustomerViewset(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    


