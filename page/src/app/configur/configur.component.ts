import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-configur',
  templateUrl: './configur.component.html',
  styleUrls: ['./configur.component.css']
})
export class ConfigurComponent implements OnInit {
  public deleteUsr : any;
  public usr : any;
  public nNombreyApellido : any;

  constructor(private Form: FormBuilder, private UsrSvc: UsersService, private alert: ToastrService) { }

  ngOnInit(): void {
    this.deleteUsr = this.Form.group({
      documento_identificacion: new FormControl('', [Validators.required])
    });
    this.nNombreyApellido = this.Form.group({
      documento_identificacion: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
    });
  }

  public deleteUser(){
    let form = this.deleteUsr.getRawValue();
    let id = form['documento_identificacion']
    this.UsrSvc.DeleteUsr(id).subscribe(res=>{
      this.usr = res;
      this.alert.success('El usuario con el documento '+id+' se elimino correctamente.', 'ELIMINACION EXITOSA')
    }, err => this.alert.error('Ah ocurrido un error inesperado, por favor revisa el documento nuevamente.', 'OH, OH!')
  )}

  public changeNyA(){
    let form = this.nNombreyApellido.getRawValue();
    let id = form['documento_identificacion']
    this.UsrSvc.EditUsers(form).subscribe(res=>{
      this.alert.success('El nombre y apellido del usuario se cambiaron exitosamente.', 'CAMBIO EXITOSO')
    }, err => this.alert.error('Ocurrio un error al actualizar el usuario '+id+' intentelo nuevamente.', 'ERROR!'));
  }
}
