import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PlantillasRoutingModule} from './plantillas-routing.module';
import {PlantillasComponent} from './plantillas.component';
import {CustomFormsModule} from 'ng2-validation';
import {FormsModule} from '@angular/forms';
import {CardModule} from '../../shared/card/card.module';
import {NgbDropdownModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {NgJsonEditorModule} from 'ang-jsoneditor';
import {ModalModule} from '../../shared/ui-modal/modal.module';

@NgModule({
  imports: [
    CommonModule,
    PlantillasRoutingModule,
    CustomFormsModule,
    FormsModule,
    CardModule,
    NgbTooltipModule,
    NgJsonEditorModule,
    ModalModule,
    NgbDropdownModule
  ],
  declarations: [PlantillasComponent]
})
export class PlantillasModule { }
