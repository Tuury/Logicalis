import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlantillasComponent} from './plantillas.component';

const routes: Routes = [
  {
    path: '',
    component: PlantillasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlantillasRoutingModule { }
