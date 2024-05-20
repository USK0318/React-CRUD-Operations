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
    path('krishna/<int:pk>', views.krishna_students),
    path('topper/', views.topper),
    path('fail/', views.fail),
    path('poststaff/', views.post_staff),
    path('staffget/', views.staff_get),
    path('staffedit/<int:pk>/', views.staff_edit),
    path('staffdelete/<int:pk>/', views.staff_delete),
]