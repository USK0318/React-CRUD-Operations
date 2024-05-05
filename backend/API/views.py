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
    
import json

@api_view(['GET'])
def telugu_students(request):
    students = Students.objects.filter()
    name=[]
    marks=[]    
    for student in students:
        name.append(student.name)
        marks.append(student.telugu)
    data = {
        "name": name,
        "marks": marks
    }
    output=[data]
    return Response(output)

@api_view(['GET'])
def highest_marks(request):
    students = Students.objects.filter()
    name=[]
    marks=[]    
    for student in students:
        name.append(student.name)
        marks.append(student.telugu+student.hindi+student.english+student.maths+student.science)
    data = {
        "name": name,
        "marks": marks
    }
    output=[data]
    return Response(output)

from django.db.models import Count

@api_view(['GET'])
def city_students(request):
    name=[]
    marks=[]
    city_groups = (
        Students.objects
        .values('city')  # Group by city
        .annotate(num_students=Count('roll'))  # Count number of students in each city
        .order_by('city')  # Optionally, order the results by city name
    )

    for group in city_groups:
        name.append(group['city'])
        marks.append(group['num_students'])
    data = {
        "name": name,
        "marks": marks
    }
    output=[data]
    return Response(output)

from .models import Students

@api_view(['GET'])
def krishna_students(request,pk):
    students = Students.objects.filter(roll=pk)

    name=['english','maths','science','hindi','telugu']
    marks=[students[0].english,students[0].maths,students[0].science,students[0].hindi,students[0].telugu]
    a = {
        "name": name,
        "marks": marks,
        "myname":students[0].name,
    }  
    data=[a]
    return Response(data)

@api_view(['GET'])
def topper(request):
    students = Students.objects.filter()
    name=[]
    marks=[]    
    for student in students:
        name.append(student.name)
        marks.append(student.telugu+student.hindi+student.english+student.maths+student.science)
    data = {
        "name": name,
        "marks": marks
    }
    output=[data]
    return Response(output)

@api_view(['GET'])
def fail(request):
    students = Students.objects.filter()
    p=0
    f=0
    for student in students:
        if (student.telugu+student.hindi+student.english+student.maths+student.science)>75:
              p+=1
        else:
            f+=1
    data = {
        "pass":[p,f]
    }
    output=data
    return Response(output)
