from django.urls import path
from . import views

# Create your urlpatterns here.

urlpatterns = [
    path("", views.api_overview),
    path("tasks/", views.task_view),
    path("task/<str:pk>/", views.task_detail_view),
    path("task-create/", views.create_task_view),
    path("task-update/<str:pk>/", views.update_task_view),
    path("task-delete/<str:pk>/", views.delete_task_view),
]
