from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import *
from .serializers import *
from rest_framework import status


@api_view(['GET'])
def students_get(request):
    students = Students.objects.all()
    serializer = StudentsSerializer(students, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def student_post(re):
    if re.method=='POST':
        a=re.data
        emp=StudentsSerializer(data=a,many=True)
        if emp.is_valid()==True:
            emp.save()
            return Response(status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def student_edit(request, pk):
    try:
        student = Students.objects.get(roll=pk)
        serializer = StudentsSerializer(instance=student, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_200_OK)
        return Response(serializer.data)
    except Exception:
        return Response(status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def student_delete(request, pk):
    try:
        student = Students.objects.get(roll=pk)
        student.delete()
        return Response(status=status.HTTP_200_OK)
    except Exception:
        return Response(status=status.HTTP_400_BAD_REQUEST)