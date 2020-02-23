import { Component, OnInit } from '@angular/core';
import {IOption} from "ng-select";

export class FormInput {
  nombre: any;
  descripcion: any;
  tipoDeTrabajo: any;
  inventario: any;
  proyecto: any;
  playbook: any;
  credencial: any;
  forks: any;
  limite: any;
  nivelDeDetalle: any;
  etiquetasDeTrabajo: any;
  omitirEtiquetas: any;
  etiquetas: any;
  entornoAnsible: any;
  grupoInstancias: any;
  jobSlicing: any;
  timeout: any;
  mostrarCambios: any;
}

@Component({
  selector: 'app-frm-validation',
  templateUrl: './plantilla-trabajo.component.html',
  styleUrls: ['./plantilla-trabajo.component.scss']
})
export class PlantillaTrabajoComponent implements OnInit {
  formInput: FormInput;
  form: any;
  public isSubmit: boolean;

  public PLAYER_ONE: Array<IOption> = [
    {value: '0', label: 'Alabama'},
    {value: '1', label: 'Wyoming'},
    {value: '2', label: 'Coming'},
    {value: '3', label: 'Henry Die'},
    {value: '4', label: 'John Doe'}
  ];

  constructor() {
    this.isSubmit = false;
  }

  ngOnInit() {
    this.formInput = {
      nombre: '',
      descripcion: '',
      tipoDeTrabajo: '',
      inventario: '',
      proyecto: '',
      playbook: '',
      credencial: '',
      forks: '',
      limite: '',
      nivelDeDetalle: '',
      etiquetasDeTrabajo: '',
      omitirEtiquetas: '',
      etiquetas: '',
      entornoAnsible: '',
      grupoInstancias: '',
      jobSlicing: '',
      timeout: '',
      mostrarCambios: ''
    };
  }

  save(form: any) {
    console.log(form.form.value);
  }

}
