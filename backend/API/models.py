from django.db import models

# Create your models here.
class Students(models.Model):
    name = models.CharField(max_length=100)
    father_name = models.CharField(max_length=100)
    roll = models.IntegerField(primary_key=True)
    english = models.IntegerField()
    maths = models.IntegerField()
    science = models.IntegerField()
    hindi = models.IntegerField()
    telugu = models.IntegerField()
    city = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Staff(models.Model):
    stadd_id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    salary = models.IntegerField()
    department = models.CharField(max_length=100)
    photo = models.ImageField(upload_to='staff_photos')

    def __str__(self):
        return self.name
