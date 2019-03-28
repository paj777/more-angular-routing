import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloneContainerComponent } from './clone-container/clone-container.component';
import { ActionsComponent } from './actions/actions.component';
import { RouterModule } from '@angular/router';
import { ClonerRoutingModule } from './cloner-routing.module';

@NgModule({
  declarations: [ActionsComponent, CloneContainerComponent],
  imports: [
    CommonModule,
    ClonerRoutingModule,
    RouterModule
  ]
})
export class ClonerModule { }
