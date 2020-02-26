import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModalComponent } from './ui-modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UiModalComponent],
  exports: [UiModalComponent]
})
export class ModalModule { }
