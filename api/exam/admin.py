from django.contrib import admin
from .models import Country, Customer
# Register your models here.


@admin.register(Country)
class CountryAdmin(admin.ModelAdmin):
    pass

@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    pass