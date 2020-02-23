import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlantillaTrabajoRoutingModule } from './plantilla-trabajo-routing.module';
import { PlantillaTrabajoComponent } from './plantilla-trabajo.component';
import {CustomFormsModule} from 'ng2-validation';
import {FormsModule} from '@angular/forms';
import {CardModule} from '../../shared/card/card.module';
import {SelectModule} from "ng-select";

@NgModule({
  imports: [
    CommonModule,
    PlantillaTrabajoRoutingModule,
    CustomFormsModule,
    FormsModule,
    CardModule,
    SelectModule
  ],
  declarations: [PlantillaTrabajoComponent]
})
export class PlantillaTrabajoModule { }
