import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {path:"login", loadComponent: () =>
    import('../components/login/login.component').then(
      (m) => m.LoginComponent
    ),},
  {path:"bienvenida", loadComponent: () =>
    import('../components/bienvenido/bienvenido.component').then(
      (m) => m.BienvenidoComponent
    ),},
  {path:"error", loadComponent: () =>
    import('../components/error/error.component').then(
      (m) => m.ErrorComponent
    ),},
  {path:"register", loadComponent: () =>
    import('../components/register/register.component').then(
      (m) => m.RegisterComponent
    ),},
  {path: '', redirectTo: 'bienvenida', pathMatch: 'full'},
  {path:"**", loadComponent: () =>
    import('../components/error/error.component').then(
      (m) => m.ErrorComponent
    ),}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
    exports: [RouterModule]
})
export class AppRoutingModule {}