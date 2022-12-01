from rest_framework.views import APIView
from rest_framework.response import Response
from app.models.responsable import Responsable
import json

class Cliente(APIView):
    def post(self, request, format=None):
        documento_identificacion = request.data["documento_identificacion"]
        nombre = request.data["nombre"]
        apellido = request.data["apellido"]
        cliente = Responsable()
        cliente.documento_identificacion = documento_identificacion
        cliente.nombre = nombre
        cliente.apellido = apellido
        cliente.save()
        res = {
            "msg": "El nombre de usuario se creo exitosamente"
        }
        return Response(res)

    def get(self, request, format=None):
        usuarios = list(Responsable.objects.all().values())
        return Response(usuarios)

    def put(self, request, format=None):
        body = json.loads(request.body)
        documento_identificacion = body['documento_identificacion']
        nombre = body['nombre']
        apellido = body['apellido']
        usuarios = Responsable.objects.filter(documento_identificacion=documento_identificacion).update(nombre=nombre, apellido=apellido)
        res = {
            "editadas": usuarios
        }
        return Response(res)

    def delete(self, request, format=None):
        documento_identificacion = request.GET['documento_identificacion']
        usuarios = Responsable.objects.filter(documento_identificacion=documento_identificacion).delete()
        return Response(usuarios)