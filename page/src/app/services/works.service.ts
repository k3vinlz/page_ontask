import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorksService {

  constructor(private http:HttpClient) { }

  public Works(tarea:any){
    return this.http.post('http://127.0.0.1:8000/api/tareas/', tarea);
  }

  public GetTasks(fk_usuario:string){
    return this.http.get(`http://127.0.0.1:8000/api/tareas/?fkusuario_id=${fk_usuario}`);
  }

  public DeleteTasks(id:string){
    return this.http.delete(`http://127.0.0.1:8000/api/tareas/?id=${id}`);
  }

  public EditTasks(tarea:any){
    return this.http.put('http://127.0.0.1:8000/api/tareas/', tarea);
  }
}
