import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosRoutingModule } from './proyectos-routing.module';
import { ProyectosComponent } from './proyectos.component';
import {CustomFormsModule} from 'ng2-validation';
import {FormsModule} from '@angular/forms';
import {CardModule} from '../../shared/card/card.module';
import {ModalModule} from '../../shared/ui-modal/modal.module';
import {NgbNavModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        ProyectosRoutingModule,
        CustomFormsModule,
        FormsModule,
        CardModule,
        ModalModule,
        NgbNavModule
    ],
  declarations: [ProyectosComponent]
})
export class ProyectosModule { }
