import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompraComponent } from '../components/compra/compra-components/compra.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'cartelera',
        loadChildren: () => import('../components/cartelera/cartelera.module').then( m => m.CarteleraModule)
      },
       {
         path: 'compra/:id',
         component:CompraComponent,
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
        path: 'snacks',
        loadChildren: () => import('../components/snacks/snacks.module').then( m => m.SnacksModule)
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
