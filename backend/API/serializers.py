from rest_framework.serializers import ModelSerializer
from .models import Students

class StudentsSerializer(ModelSerializer):
    class Meta:
        model = Students
        fields = '__all__'