import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { WorksService } from '../services/works.service';

@Component({
  selector: 'app-t-pend',
  templateUrl: './t-pend.component.html',
  styleUrls: ['./t-pend.component.css']
})
export class TPendComponent implements OnInit {
  public consulttask: any;
  public deltask: any;
  public taks:any;
  public edittask: any;

  constructor(private Form:FormBuilder, private wSvc: WorksService, private alert: ToastrService) { }

  ngOnInit(): void {
    this.consulttask = this.Form.group({
      fkusuario_id: new FormControl('', [Validators.required])
    });
    this.deltask = this.Form.group({
      id: new FormControl('', [Validators.required])
    })
    this.edittask = this.Form.group({
      id: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      fecha_limite: new FormControl('', [Validators.required]),
      fkusuario_id: new FormControl('', [Validators.required])
    })
  }

  public editWork(){
    let form = this.edittask.getRawValue();
    let fk_usuario = form['fkusuario_id']
    this.wSvc.EditTasks(form).subscribe(res=>{
      this.alert.success("La tarea se a editado correctamente, y se asigno a el usuario "+fk_usuario, "Editado correctamente")
    }, err => this.alert.error("Ocurrio un error al editar la tarea, por favor vuelvalo a intentar.", "ERROR"))
  }

  public deleteWork(){
    let form = this.deltask.getRawValue();
    let id = form['id']
    this.wSvc.DeleteTasks(id).subscribe(res=>{
      this.taks = res;
      this.alert.success("Por favor recarga la pagina", "ELIMINADO EXITOSAMENTE")
    }, err => this.alert.error("Ocurrio un error al intentar eliminar la tarea, por favor intentelo otra vez.", "ERROR"));
  }

  public searchTask(){
    let form = this.consulttask.getRawValue();
    let fk_usuario = form['fkusuario_id']
    this.wSvc.GetTasks(fk_usuario).subscribe(res=>{
      this.taks = res;
      console.log(this.taks)
    });
  }
}
