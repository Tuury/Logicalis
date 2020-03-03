import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CustomFormsModule} from 'ng2-validation';
import {FormsModule} from '@angular/forms';
import {CardModule} from '../../shared/card/card.module';
import {SelectModule} from "ng-select";
import {NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";
import {ModalModule} from '../../shared/ui-modal/modal.module';
import {PlantillaTrabajoComponent} from "./plantilla-trabajo.component";

@NgModule({
  imports: [
    CommonModule,
    CustomFormsModule,
    FormsModule,
    CardModule,
    SelectModule,
    NgbTooltipModule,
    ModalModule
  ],
  declarations: [PlantillaTrabajoComponent]
})
export class PlantillaTrabajoModule {
}