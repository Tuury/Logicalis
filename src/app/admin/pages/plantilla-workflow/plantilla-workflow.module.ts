import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PlantillaWorkflowRoutingModule} from './plantilla-workflow-routing.module';
import {PlantillaWorkflowComponent} from './plantilla-workflow.component';
import {CustomFormsModule} from 'ng2-validation';
import {FormsModule} from '@angular/forms';
import {CardModule} from '../../shared/card/card.module';
import {NgbNavModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {NgJsonEditorModule} from 'ang-jsoneditor';
import {ModalModule} from '../../shared/ui-modal/modal.module';

@NgModule({
  imports: [
    CommonModule,
    PlantillaWorkflowRoutingModule,
    CustomFormsModule,
    FormsModule,
    CardModule,
    NgbTooltipModule,
    NgJsonEditorModule,
    NgbNavModule,
    ModalModule
  ],
  declarations: [PlantillaWorkflowComponent]
})
export class PlantillaWorkflowModule { }
