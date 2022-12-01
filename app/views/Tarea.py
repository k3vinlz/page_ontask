from rest_framework.views import APIView
from rest_framework.response import Response
from datetime import date
from app.models.tareas import Tarea
from app.models.responsable import Responsable
import json

class Works(APIView):
    def post(self, request, format=None):
        nombre = request.data['nombre']
        descripcion = request.data['descripcion']
        #fecha_creacion = date.strptime(request.data['fecha_creacion'], '%d/%m/%y')
        fecha_asignacion = request.data['fecha_asignacion']
        fecha_limite = request.data['fecha_limite']
        responsable = Responsable()
        responsable.documento_identificacion = request.data['fkusuario']
        tarea = Tarea()
        tarea.nombre = nombre
        tarea.descripcion = descripcion
        tarea.fecha_asignacion = fecha_asignacion
        tarea.fecha_limite = fecha_limite
        tarea.fkusuario = responsable
        tarea.save()
        res = {
            "msg": "Creado Exitosamente"
        }
        return Response(res)

    def get(self, request, format=None):
        tareas = Tarea.objects.all()
        fkusuario_id = request.GET['fkusuario_id']
        tareas = list(tareas.filter(fkusuario_id=fkusuario_id).values())
        return Response(tareas)

    def put(self, request, format=None):
        body = json.loads(request.body)
        id = body['id']
        nombre = body['nombre']
        descripcion = body['descripcion']
        fecha_limite = body['fecha_limite']
        fkusuario_id = body['fkusuario_id']
        tareas = Tarea.objects.filter(id=id).update(nombre=nombre, descripcion=descripcion, fecha_limite=fecha_limite, fkusuario_id=fkusuario_id)
        res = {
            "editadas": tareas
        }
        return Response(res)

    def delete(self, request, format=None):
        id = request.GET['id']
        tareas = Tarea.objects.filter(id=id).delete()
        return Response(tareas)