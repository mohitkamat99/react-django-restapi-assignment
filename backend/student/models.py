from django.db import models
from django.db.models.fields import EmailField

# Create your models here.
class Details(models.Model):
    first_name = models.CharField(max_length=50,blank=False,default='')
    last_name = models.CharField(max_length=50, blank=False, default='')
    email = models.EmailField(max_length=30,blank=False,default='')
    college_name = models.CharField(max_length=100, blank=False, default='')
    course = models.CharField(max_length=100, blank=False, default='')
    phone = models.BigIntegerField(blank=False,default=0)
