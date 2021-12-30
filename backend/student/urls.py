from django.urls import re_path,include
from student import views
from rest_framework import routers

#api url declaration

router = routers.DefaultRouter()
router.register(r'students', views.Student, 'student')


urlpatterns = [
    re_path(r'^api/', include(router.urls)),
    re_path(r'^', views.home),
]