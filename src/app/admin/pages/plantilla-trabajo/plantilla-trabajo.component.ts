import {Component, OnInit, ViewChild} from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import {DataSelect} from '../../shared/data/dataSelect';
import {UiModalComponent} from '../../shared/ui-modal/ui-modal.component';
import {IOption} from 'ng-select';


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
  @ViewChild('modalSelect', {static: false}) modalComponent: UiModalComponent;
  @ViewChild('permisos', {static: false}) permisosModal: UiModalComponent;
  formInput: FormInput;
  form: any;
  public isSubmit: boolean;

  public TIPO_DE_TRABAJO = DataSelect.TIPO_DE_TRABAJO;
  public NIVEL_DE_DETALLE = DataSelect.NIVEL_DE_DETALLE;
  public ENTORNO_ANSIBLE = DataSelect.ENTORNO_ANSIBLE;
  public HARDCODEO = DataSelect.HARDCODEO;

  public PLAYER_ONE: Array<IOption> = [
    {value: '0', label: 'Alabama'},
    {value: '1', label: 'Wyoming'},
    {value: '2', label: 'Coming'},
    {value: '3', label: 'Henry Die'},
    {value: '4', label: 'John Doe'}
  ];

  public usuarios = [{nombre: 'carlos' , funcion: 'tecnico', funcionEquipo: 'electronico'}];


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
    this.modalComponent.hide();
  }


  save(form: any) {
    console.log(form.form.value);
  }
}
