from django.urls import path
from app.views.Tarea import Works
from app.views.Cliente import Cliente

urlpatterns = [
    path('ingresar/', Cliente.as_view()),
    path('tareas/', Works.as_view()),
]
