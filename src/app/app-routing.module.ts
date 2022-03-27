import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteleraComponent } from './components/cartelera/cartelera.component';
import { CompraComponent } from './components/compra/compra.component';
import { FuncionPeliculaComponent } from './components/funcion-pelicula/funcion-pelicula.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PagoComponent } from './components/pago/pago.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { SalaComponent } from './components/sala/sala.component';

const routes: Routes = [{
  path:'login',
  component: IniciarSesionComponent
},{
  path:'cartelera',
  component: CarteleraComponent
},{
  path:'compra',
  component: CompraComponent
},{
  path:'funcion-pelicula',
  component: FuncionPeliculaComponent
},{
  path:'pago',
  component: PagoComponent
},{
  path:'perfil',
  component: PerfilComponent
},{
  path:'register',
  component: RegistrarseComponent
},{
  path:'sala',
  component: SalaComponent
},{
   path: '**', redirectTo: 'login'
}];

@NgModule({
  imports:  [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
