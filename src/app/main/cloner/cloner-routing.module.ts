import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CloneContainerComponent } from './clone-container/clone-container.component';

const rootAppRoutes: Routes = [    
    { path: '', redirectTo: 'cloner', pathMatch: 'full' },    
    {
        path:'cloner',
        component: CloneContainerComponent,
        children:[{
            path:'',
            component: CloneContainerComponent
        }
    ]                    
    },
        
];

@NgModule({
    imports: [
        RouterModule.forChild(rootAppRoutes)
    ],
    exports:[RouterModule]
})

export class ClonerRoutingModule{

}