from django.urls import path
from . import views

urlpatterns = [
    path('studentsget/', views.students_get),
    path('studentedit/<int:pk>/', views.student_edit),
    path('studentdelete/<int:pk>/', views.student_delete),
    path('studentpost/', views.student_post),
    path('telugustudents/', views.telugu_students),
    path('highmarks/', views.highest_marks),
    path('citystudents/', views.city_students),
    path('krishna/', views.krishna_students),
    path('topper/', views.topper),
    path('fail/', views.fail),
]