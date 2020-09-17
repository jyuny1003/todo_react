from django.shortcuts import render
from .serializer import SignupSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import User
# Create your views here.

@api_view(['GET', 'POST'])
def signUp(request):

    if request.method == 'GET':
        users = SignupSerializer(data = User.objects.all(), many=True)
        return Response(users.data)
    elif request.method == 'POST':
        signup = SignupSerializer(data=request.data)
        if signup.is_valid():
            signup.save()
            return Response(signup.data, status=201)