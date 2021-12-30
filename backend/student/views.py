from re import S
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import serializers, status,viewsets
from .serializers import StudentSerializer,CreateStudentSerializer
from .models import Details

# Create your views here.

#index page
def home(request):
  context = {}
  return render(request,"index.html",context)


#students api view model
class Student(viewsets.ModelViewSet):
  queryset = Details.objects.all()
  serializer_class = StudentSerializer


