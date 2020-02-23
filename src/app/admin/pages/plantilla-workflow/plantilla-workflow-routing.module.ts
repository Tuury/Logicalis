import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlantillaWorkflowComponent} from './plantilla-workflow.component';

const routes: Routes = [
  {
    path: '',
    component: PlantillaWorkflowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlantillaWorkflowRoutingModule { }
