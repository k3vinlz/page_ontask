from django.db import models

class Responsable(models.Model):
    documento_identificacion = models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=30)
    apellido = models.CharField(max_length=30)