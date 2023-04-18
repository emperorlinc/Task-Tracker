from .models import Task
from rest_framework import serializers

# Create your serializers here.

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = "__all__"
