import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  public Usuarios(cliente:any):Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/ingresar/', cliente);
  }

  public ShowUsers():Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/ingresar/');
  }

  public DeleteUsr(id:string):Observable<any>{
    return this.http.delete(`http://127.0.0.1:8000/api/ingresar/?documento_identificacion=${id}`);
  }

  public EditUsers(cliente:any):Observable<any>{
    return this.http.put('http://127.0.0.1:8000/api/ingresar/', cliente);
  }
}
