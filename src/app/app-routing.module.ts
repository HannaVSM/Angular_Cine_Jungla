import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompraComponent } from './components/compra/compra-components/compra.component';
import { FuncionPeliculaComponent } from './components/funcion-pelicula/funcion-pelicula-components/funcion-pelicula.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PagoComponent } from './components/pago/pago-components/pago.component';
import { PerfilComponent } from './components/perfil/perfil-components/perfil.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { SalaComponent } from './components/sala/sala.component';
import { DashboardComponent } from './general/dashboard/dashboard.component';

const routes: Routes = [{
  path:'login',
  component: IniciarSesionComponent
},
// {
//   path:'cartelera',
//   component: CarteleraComponent
// },{
//   path:'compra',
//   component: CompraComponent
// },{
//   path:'funcion-pelicula',
//   component: FuncionPeliculaComponent
// },{
//   path:'pago',
//   component: PagoComponent
// },{
//   path:'perfil',
//   component: PerfilComponent
// },
{
  path:'register',
  component: RegistrarseComponent
},
//{
//   path:'sala',
//   component: SalaComponent
// },
{
  path:'default',
  component:DashboardComponent,
  children:[
  {
    path: 'dashboard',
    loadChildren: () => import('./general/dashboard.module').then( m => m.DashboardModule)
  }]},
{
   path: '**', redirectTo: 'login'
}];

@NgModule({
  imports:  [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
