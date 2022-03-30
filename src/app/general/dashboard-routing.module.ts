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
      // {
      //   path: 'compra',
      //   loadChildren: () => import('').then( m => m.)
      // },
      // {
      //   path: 'pago',
      //   loadChildren: () => import('').then( m => m.)
      // },
      // {
      //   path: 'perfil',
      //   loadChildren: () => import('').then( m => m.)
      // },
      // ingresar componente funcion-pelicula
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
