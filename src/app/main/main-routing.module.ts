import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContainerComponent } from '../main-container/main-container.component';
import { CloneContainerComponent } from './cloner/clone-container/clone-container.component';
import { FiddlerContainerComponent } from './fiddler/fiddler-container/fiddler-container.component';
import { ScratcherContainerComponent } from './scratcher/scratcher-container/scratcher-container.component';

const rootAppRoutes: Routes = [    
    { path: '', redirectTo: 'main', pathMatch: 'full' },    
    {
        path:'main',
        component: MainContainerComponent,
        children:[{
            path:'',
            component: MainContainerComponent

        },
        {
            path:'cloner',
            component: CloneContainerComponent
        },
        { 
            path:'fiddler',
            component: FiddlerContainerComponent
        },
        {
            path:'scratcher',
            component: ScratcherContainerComponent
        }]                    
    },
    { path: '', loadChildren: './cloner/cloner.module#ClonerModule' }    
];

@NgModule({
    imports: [
        RouterModule.forChild(rootAppRoutes)
    ],
    exports:[RouterModule]
})

export class MainRoutingModule{

}