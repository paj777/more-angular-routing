import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CloneContainerComponent } from './clone-container/clone-container.component';
import { ActionsComponent } from './actions/actions.component';

const rootAppRoutes: Routes = [    
    { path: '', redirectTo: 'cloner', pathMatch: 'full' },    
    {
        path:'cloner',
        component: CloneContainerComponent,
        children:[{
            path:'',
            component: CloneContainerComponent, children: [
                {path: 'actions', component: ActionsComponent, outlet:'actions'}
            ]
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
