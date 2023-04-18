from django.db import models

# Create your models here.

class Task(models.Model):
    title = models.CharField(max_length=45, unique=True)
    time = models.CharField(max_length=45, unique=True)
    reminder = models.BooleanField(default=False)

    def __str__(self):
        return self.title
