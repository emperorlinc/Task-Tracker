from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response

from .models import Task
from .serializer import TaskSerializer

# Create your views here.

@api_view(["GET"])
def api_overview(request):
    api_routes = {
        "tasks": "api/tasks/",
        "task": "api/task/id/",
        "task-create": "api/task-create/",
        "task-update": "api/task-update/id/",
        "task-delete": "api/task-delete/id/"
    }
    return Response(api_routes, status=status.HTTP_200_OK)

@api_view(["GET"])
def task_view(request):
    tasks = Task.objects.all()
    serializer = TaskSerializer(tasks, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(["GET"])
def task_detail_view(request, pk):
    task = Task.objects.get(id=pk)
    serializer = TaskSerializer(task, many=False)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(["POST"])
def create_task_view(request):
    serializer = TaskSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)

@api_view(["PUT"])
def update_task_view(request, pk):
    task = Task.objects.get(id=pk)
    serializer = TaskSerializer(instance=task, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)

@api_view(["DELETE"])
def delete_task_view(request, pk):
    task = Task.objects.get(id=pk)
    task.delete()
    return Response("Task deleted successfully", status=status.HTTP_200_OK)
