import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-n-usuario',
  templateUrl: './n-usuario.component.html',
  styleUrls: ['./n-usuario.component.css']
})
export class NUsuarioComponent implements OnInit {
  public new_user : FormGroup;

  constructor(private FrmBd: FormBuilder, private UserSvc: UsersService, private alert: ToastrService) {
    this.new_user = this.FrmBd.group({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      documento_identificacion: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void { }
  
  public nuevoResponsable(): void {
    let info = this.new_user.getRawValue();
    let datajson = JSON.stringify(info);
    this.UserSvc.Usuarios(info).subscribe(res=>{
      this.alert.success('El usuario se registro correctamente.', 'REGISTRO EXITOSO')
    }, err => this.alert.warning('Ocurrio un error, por favor revisa los campos e intentelo nuevamente.', 'ADVERTENCIA!'));
  }
}
