import {Component, OnInit, ViewChild} from '@angular/core';
import {UiModalComponent} from '../../shared/ui-modal/ui-modal.component';
import {DataSelect} from '../../shared/data/dataSelect';

export class FormInput {
  nombre: any;
  descripcion: any;
  organizacion: any;
  scm: any;
  entornoAnsible: any;
}

@Component({
  selector: 'app-plantilla-trabajo',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
  @ViewChild('modalSelect', {static: false}) exampleModalCenter: UiModalComponent;
  formInput: FormInput;
  form: any;
  public isSubmit: boolean;

  public usuarios = [{nombre: 'carlos' , funcion: 'tecnico', funcionEquipo: 'electronico'}];
  public ENTORNO_ANSIBLE = DataSelect.ENTORNO_ANSIBLE;
  public SCM = DataSelect.SCM;
  proyectos: any[] = [
    {
      nombre: 'Cisco acl',
      scm: 'Manual'
    },
    {
      nombre: 'Demo Project',
      scm: 'GIT'
    }
  ];

  constructor() {
    this.isSubmit = false;
  }

  ngOnInit() {
    this.formInput = {
      nombre: '',
      descripcion: '',
      organizacion: '',
      scm: '',
      entornoAnsible: '',
    };
  }

  selectedValue(value: any, input: HTMLInputElement) {
    switch (input.name) {
      case 'scm': {
        this.formInput.scm = value;
        break;
      }
      case 'entornoAnsible': {
        this.formInput.entornoAnsible = value;
        break;
      }
    }
    this.exampleModalCenter.hide();
  }

  cancel() {
    this.ngOnInit();
  }
  save(form: any) {
    console.log(form.form.value);
    this.proyectos.push({nombre: form.form.value.nombre, scm: form.form.value.scm});
  }

}
