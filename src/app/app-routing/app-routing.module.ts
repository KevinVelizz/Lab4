import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { BienvenidoComponent } from '../components/bienvenido/bienvenido.component';
import { ErrorComponent } from '../components/error/error.component';

export const routes: Routes = [
  {path:"login", loadComponent:()=>LoginComponent},
  {path:"bienvenida", loadComponent:()=>BienvenidoComponent},
  // {path: '', redirectTo: 'bienvenida', pathMatch: 'full'},
  {path:"**", loadComponent:()=>ErrorComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
