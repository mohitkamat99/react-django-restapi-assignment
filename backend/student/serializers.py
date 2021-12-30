from django.db.models import fields
from rest_framework import serializers
from student.models import Details


#serialization of fields
class StudentSerializer(serializers.ModelSerializer):
  class Meta:
    model = Details
    fields = ('__all__')

#This class is not used
class CreateStudentSerializer(serializers.ModelSerializer):
  class Meta:
    model = Details
    fields = ('first_name','last_name','email','college_name','course','phone')