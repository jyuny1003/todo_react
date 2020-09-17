from rest_framework.serializers import ModelSerializer, Serializer
from rest_framework import serializers
from .models import Students, Scores
from django.contrib.auth import get_user_model
from rest_framework.validators import ValidationError
import re
class StudentBasicSerializer(Serializer):
    name = serializers.CharField()
    address = serializers.CharField()
    email = serializers.CharField()

    def create(self, validated_data):
        Student.objects.create()
        return Students.objects.create(**validated_data)
    #instance 원래데이터( student )
    #validated_data 사람이 보내준 데이터 (data = request.data)
    # 원래데이터 <- 사람이 보내준데이터 후 save
    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.address = validated_data.get('address', instance.address)
        instance.email = validated_data.get('email', instance.email)
        instance.save()
        return instance

class ScoreBasicSerializer(Serializer):
    name = serializers.CharField()
    math = serializers.IntegerField()
    english = serializers.IntegerField()
    science = serializers.IntegerField()

    def create(self, validated_data):
        Scores.objects.create()
        return Scores.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.math = validated_data.get('math', instance.math)
        instance.english = validated_data.get('english', instance.english)
        instance.science = validated_data.get('science', instance.science)



class UserSerializer(ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ['username', 'email', 'phone_number']



class StudentSerializer(ModelSerializer):
    
    reg_data = UserSerializer(read_only=True)
    reg_username = serializers.ReadOnlyField(source='reg_user.username')
    reg_email = serializers.ReadOnlyField(source='reg_user.email')

    class Meta:
        model = Students
        fields = ['name', 'address', 'email', 'memo', 'phone_number', 'reg_user', 'reg_username', 'reg_email', 'reg_data']

    def validate_phone_number(self, value):
        result = re.match("[0-9]{3}-[0-9]{3,4}-[0-9]{3,4}", value)
        if result == None:
            raise ValidationError("전화번호 형식이 맞지 않습니다.")
        return value


class ScoreSerializer(ModelSerializer):
    
    username = serializers.ReadOnlyField(source='reg_user.username')
    email = serializers.ReadOnlyField(source='reg_user.email')
    phone_number = serializers.ReadOnlyField(source='reg_user.phone_number')   
    
    class Meta:
        model = Scores
        fields = ['name', 'math', 'english', 'science', 'reg_user', 'username', 'email', 'phone_number']

    def validate(self, value):

        if len(value['name']) < 3:
            raise ValidationError("3글자 이상 입력해주세요!")
        if value['math'] < 0:
            raise ValidationError("0점에서 100점 사이의 숫자를 입력해주세요!") 
        if value['math'] > 100:
            raise ValidationError("0점에서 100점 사이의 숫자를 입력해주세요!")
        return value

