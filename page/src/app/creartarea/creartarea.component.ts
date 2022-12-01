import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { WorksService } from '../services/works.service';

@Component({
  selector: 'app-creartarea',
  templateUrl: './creartarea.component.html',
  styleUrls: ['./creartarea.component.css']
})
export class CreartareaComponent implements OnInit {
  public nueva_Tarea: any;

  constructor(private FrmBd: FormBuilder, private TareaSvc: WorksService, private alert: ToastrService) {
    this.nueva_Tarea = this.FrmBd.group({
      nombre: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      fecha_asignacion: new FormControl('', [Validators.required]),
      fecha_limite: new FormControl('', [Validators.required]),
      fkusuario: new FormControl('', [Validators.required]),
    });
   }

  ngOnInit(): void {
  }

  public TareaNueva(){
    let info = this.nueva_Tarea.getRawValue();
    let datajson = JSON.stringify(info);
    let id = info['fkusuario']
    this.TareaSvc.Works(info).subscribe(res=>{
      this.alert.success("La tarea se registro exitosamente al usuario "+id+".", 'TAREA CREADA EXITOSAMENTE')
    }, err => this.alert.error("Ocurrio un error al registrar la tarea, por favor revisa los campos e intentelo nuevamente.", "ERROR INESPERADO"));
  }

}
