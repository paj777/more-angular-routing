import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: './main/main.module#MainModule' }];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      enableTracing: true // <-- debugging purposes only
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
