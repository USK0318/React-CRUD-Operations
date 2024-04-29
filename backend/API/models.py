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
