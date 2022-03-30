import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'cartelera',
        loadChildren: () => import('../components/cartelera/cartelera.module').then( m => m.CarteleraModule)
      },
       {
         path: 'compra',
         loadChildren: () => import('../components/compra/compra.module').then( m => m.CompraModule)
       },
      {
         path: 'pago',
         loadChildren: () => import('../components/pago/pago.module').then( m => m.PagoModule)
       },
       {
         path: 'perfil',
         loadChildren: () => import('../components/perfil/perfil.module').then( m => m.PerfilModule)
       },
       {
         path: 'funcion-pelicula',
         loadChildren: () => import('../components/funcion-pelicula/funcion-pelicula.module').then( m => m.FuncionPeliculaModule)
       },





      {
        path: '**', redirectTo: 'cartelera'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
