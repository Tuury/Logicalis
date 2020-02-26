import {Component, OnInit, ViewChild} from '@angular/core';
import {UiModalComponent} from '../../shared/ui-modal/ui-modal.component';
import {DataSelect} from '../../shared/data/dataSelect';

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
  @ViewChild('modalSelect', {static: false}) exampleModalCenter: UiModalComponent;
  formInput: FormInput;
  form: any;
  public isSubmit: boolean;

  ENTORNO_ANSIBLE = DataSelect.ENTORNO_ANSIBLE;
  public HARDCODEO = DataSelect.HARDCODEO;
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

  selectedValue(value: any, input: HTMLInputElement) {
    console.log(input);
    console.log(value);
    switch (input.name) {
      case 'entornoAnsible': {
        this.formInput.entornoAnsible = value;
        break;
      }
      case 'grupoInstancias': {
        this.formInput.grupoInstancias = value;
        break;
      }

    }
    this.exampleModalCenter.hide();
  }

  save(form: any) {
    console.log(form.form.value);
    this.organizaciones.push({nombre: form.form.value.nombre});
  }

}
