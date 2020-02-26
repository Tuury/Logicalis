import {Component, OnInit, ViewChild} from '@angular/core';
import {UiModalComponent} from '../../shared/ui-modal/ui-modal.component';
import {DataSelect} from '../../shared/data/dataSelect';

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
  privilegios: boolean;
  callbacks: boolean;
  trabajosConcurrentes: boolean;
  cache: boolean;
}

@Component({
  selector: 'app-plantilla-trabajo',
  templateUrl: './plantilla-trabajo.component.html',
  styleUrls: ['./plantilla-trabajo.component.scss']
})
export class PlantillaTrabajoComponent implements OnInit {
  @ViewChild('modalSelect', {static: false}) exampleModalCenter: UiModalComponent;
  formInput: FormInput;
  form: any;
  public isSubmit: boolean;

  public TIPO_DE_TRABAJO = DataSelect.TIPO_DE_TRABAJO;
  public NIVEL_DE_DETALLE = DataSelect.NIVEL_DE_DETALLE;
  public ENTORNO_ANSIBLE = DataSelect.ENTORNO_ANSIBLE;
  public HARDCODEO = DataSelect.HARDCODEO;

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
      mostrarCambios: '',
      trabajosConcurrentes: false,
      callbacks: false,
      cache: false,
      privilegios: true,
    };
  }

  selectedValue(value: any, input: HTMLInputElement) {
    switch (input.name) {
      case 'tipoDeTrabajo': {
        this.formInput.tipoDeTrabajo = value;
        break;
      }
      case 'nivelDeDetalle': {
        this.formInput.nivelDeDetalle = value;
        break;
      }
      case 'entornoAnsible': {
        this.formInput.entornoAnsible = value;
        break;
      }
      case 'inventario': {
        this.formInput.inventario = value;
        break;
      }
      case 'proyecto': {
        this.formInput.proyecto = value;
        break;
      }
      case 'playbook': {
        this.formInput.playbook = value;
        break;
      }
      case 'credencial': {
        this.formInput.credencial = value;
        break;
      }
      case 'grupoInstancias': {
        this.formInput.grupoInstancias = value;
        break;
      }
      case 'jobSlicing': {
        this.formInput.jobSlicing = value;
        break;
      }
      case 'timeout': {
        this.formInput.timeout = value;
        break;
      }
      case 'forks': {
        this.formInput.forks = value;
        break;
      }
    }
    this.exampleModalCenter.hide();
  }

  save(form: any) {
    console.log(form.form.value);
  }

}
