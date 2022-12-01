from django.db import models
from django.db.models.fields.related import ForeignKey
from app.models.responsable import Responsable

class Tarea(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField(max_length=1000)
    fecha_asignacion = models.DateField()
    fecha_limite = models.DateField()
    fkusuario = ForeignKey(Responsable, on_delete=models.CASCADE)