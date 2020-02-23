import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlantillaTrabajoComponent} from './plantilla-trabajo.component';

const routes: Routes = [
  {
    path: '',
    component: PlantillaTrabajoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlantillaTrabajoRoutingModule { }
