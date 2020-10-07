from django.db import models
from django.contrib.auth import get_user_model



# Create your models here.
class TodoGroup(models.Model):
    seq = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    reg_date = models.DateField(auto_now_add=True)
    del_yn = models.BooleanField(default=False)

    def __str__(self):
        return self.name


class Todo(models.Model):

    status_choices = (
        ('pending', '할일'),
        ('inprogress', '진행중'),
        ('end', '완료')
    )



    seq = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    status = models.CharField(max_length=20, choices=status_choices)
    reg_date = models.DateField(auto_now_add=True) 
    end_date = models.DateField(blank=True)
    del_yn = models.BooleanField(default=False)
    group = models.ForeignKey(TodoGroup, on_delete=models.CASCADE)
    image = models.ImageField(null=True, blank=True, upload_to="%Y/%m")
    #DateField에서 auto_now는 save될때마다 갱신/ auto_now_add는 최초저장시날짜저장.


class FavoriteGroup(models.Model):
    seq = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    reg_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name


class Favorite(models.Model):
    seq = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    url = models.CharField(max_length=100)
    memo = models.TextField()
    reg_date = models.DateField(auto_now_add=True)
    group = models.ForeignKey(FavoriteGroup,on_delete=models.CASCADE)