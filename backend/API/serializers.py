from rest_framework.serializers import ModelSerializer
from .models import Students, Staff

class StudentsSerializer(ModelSerializer):
    class Meta:
        model = Students
        fields = '__all__'

class StaffSerializer(ModelSerializer):
    class Meta:
        model = Staff
        fields = '__all__'