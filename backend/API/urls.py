from django.urls import path
from . import views

urlpatterns = [
    path('studentsget/', views.students_get),
    path('studentedit/<int:pk>/', views.student_edit),
    path('studentdelete/<int:pk>/', views.student_delete),
    path('studentpost/', views.student_post),
]