from django.contrib.auth.models import AbstractUser
from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

class User(AbstractUser):
    name = models.CharField(max_length=255)
    phone = PhoneNumberField()
    email = models.EmailField("email", unique=True)
    def __str__(self):
        return self.username

class Tutors(models.Model):
    name = models.CharField(max_length=70)
    qualification = models.CharField(max_length=100)
    desc = models.CharField(max_length=1000)
    linkdin = models.CharField(max_length=500 , null=True , blank=True)
    Xaccount = models.CharField(max_length=500 , null=True , blank=True)

class Contact(models.Model):
    first_name = models.CharField(max_length=250,default='test')
    last_name = models.CharField(max_length=250)
    email = models.EmailField()
    message = models.TextField(max_length=3000)
