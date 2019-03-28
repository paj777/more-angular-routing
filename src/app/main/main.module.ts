import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
//import { ActionsModule } from '../Cloner/actions/actions.module';
import { RouterModule } from '@angular/router';
import { MainContainerComponent } from '../main-container/main-container.component';
import { FiddlerContainerComponent } from './fiddler/fiddler-container/fiddler-container.component';
import { ScratcherContainerComponent } from './scratcher/scratcher-container/scratcher-container.component';

@NgModule({
  declarations: [MainContainerComponent,
    FiddlerContainerComponent,
    ScratcherContainerComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    RouterModule
  ]  
})
export class MainModule { }
