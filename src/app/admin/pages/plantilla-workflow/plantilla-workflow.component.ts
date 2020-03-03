import {Component, OnInit, ViewChild} from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';


export class FormInput {
  nombre: any;
  descripcion: any;
  organizacion: any;
  inventario: any;
  etiquetas: any;
  opciones: any;
  variablesAdicionales: any;
  trabajosConcurrentes: boolean;
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
  public editorOptions: JsonEditorOptions;
  public data: any;
  @ViewChild(JsonEditorComponent, { static: true }) editor: JsonEditorComponent;


  constructor() {
    this.isSubmit = false;
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.mode = 'code'; //set only one mode
    this.editorOptions.mainMenuBar = false;
    this.editorOptions.statusBar = false;

    this.data = {"products":[{"name":"car","product":[{"name":"honda","model":[{"id":"civic","name":"civic"},{"id":"accord","name":"accord"},{"id":"crv","name":"crv"},{"id":"pilot","name":"pilot"},{"id":"odyssey","name":"odyssey"}]}]}]}

  }

  ngOnInit() {
    this.formInput = {
      nombre: '',
      descripcion: '',
      organizacion: '',
      inventario: '',
      etiquetas: '',
      opciones: '',
      variablesAdicionales: '',
      trabajosConcurrentes: false
    };
  }

  save(form: any) {
    console.log(form.form.value);
  }

}
