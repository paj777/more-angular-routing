import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloneContainerComponent } from './clone-container/clone-container.component';
import { ActionsComponent } from './actions/actions.component';

@NgModule({
  declarations: [ActionsComponent],
  imports: [
    CommonModule
  ]
})
export class ClonerModule { }
