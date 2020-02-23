import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizacionesRoutingModule } from './organizaciones-routing.module';
import { OrganizacionesComponent } from './organizaciones.component';
import {CustomFormsModule} from 'ng2-validation';
import {FormsModule} from '@angular/forms';
import {CardModule} from '../../shared/card/card.module';

@NgModule({
  imports: [
    CommonModule,
    OrganizacionesRoutingModule,
    CustomFormsModule,
    FormsModule,
    CardModule
  ],
  declarations: [OrganizacionesComponent]
})
export class OrganizacionesModule { }
