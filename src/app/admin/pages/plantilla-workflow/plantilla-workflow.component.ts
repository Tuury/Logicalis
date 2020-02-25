import {Component, OnInit} from '@angular/core';

export class FormInput {
  nombre: any;
  descripcion: any;
  organizacion: any;
  inventario: any;
  etiquetas: any;
  opciones: any;
  variablesAdicionales: any;
}

@Component({
  selector: 'app-plantilla-trabajo',
  templateUrl: './plantilla-workflow.component.html',
  styleUrls: ['./plantilla-workflow.component.scss']
})
export class PlantillaWorkflowComponent implements OnInit {
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
      organizacion: '',
      inventario: '',
      etiquetas: '',
      opciones: '',
      variablesAdicionales: 'juaja'
    };
  }

  save(form: any) {
    console.log(form.form.value);
  }

}
