import { Component, OnInit } from '@angular/core';

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
  templateUrl: './organizaciones.component.html',
  styleUrls: ['./organizaciones.component.scss']
})
export class OrganizacionesComponent implements OnInit {
  formInput: FormInput;
  form: any;
  public isSubmit: boolean;
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
