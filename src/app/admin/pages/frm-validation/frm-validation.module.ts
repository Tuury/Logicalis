import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrmValidationRoutingModule } from './frm-validation-routing.module';
import { FrmValidationComponent } from './frm-validation.component';
import {CustomFormsModule} from 'ng2-validation';
import {FormsModule} from '@angular/forms';
import {CardModule} from '../../shared/card/card.module';

@NgModule({
  imports: [
    CommonModule,
    FrmValidationRoutingModule,
    CustomFormsModule,
    FormsModule,
    CardModule
  ],
  declarations: [FrmValidationComponent]
})
export class FrmValidationModule { }
