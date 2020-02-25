import { Component, OnInit } from '@angular/core';

export class FormInput {
  nombre: any;
  descripcion: any;
  grupoInstancias: any;
  entornoAnsible: any;
}

@Component({
  selector: 'app-plantilla-trabajo',
  templateUrl: './organizaciones.component.html',
  styleUrls: ['./organizaciones.component.scss']
})
export class OrganizacionesComponent implements OnInit {
  formInput: FormInput;
  form: any;
  public isSubmit: boolean;
  organizaciones: any[] = [
    {
     nombre: 'Default'
    }
  ];
  constructor() {
    this.isSubmit = false;
  }

  ngOnInit() {
    this.formInput = {
      nombre: '',
      descripcion: '',
      entornoAnsible: '',
      grupoInstancias: ''
    };
  }

  save(form: any) {
    console.log(form);
    this.organizaciones.push({nombre: form.form.value.nombre});
  }

}
