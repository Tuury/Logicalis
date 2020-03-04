import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PlantillaTrabajoRoutingModule} from './plantilla-trabajo-routing.module';
import {PlantillaTrabajoComponent} from './plantilla-trabajo.component';
import {CustomFormsModule} from 'ng2-validation';
import {FormsModule} from '@angular/forms';
import {CardModule} from '../../shared/card/card.module';
import {NgbNavModule, NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";
import {NgJsonEditorModule} from 'ang-jsoneditor';
import {ModalModule} from '../../shared/ui-modal/modal.module';

@NgModule({
  imports: [
    CommonModule,
    PlantillaTrabajoRoutingModule,
    CustomFormsModule,
    FormsModule,
    CardModule,
    NgbTooltipModule,
    NgJsonEditorModule,
    ModalModule,
    NgbNavModule
  ],
  declarations: [PlantillaTrabajoComponent]
})
export class PlantillaTrabajoModule { }
