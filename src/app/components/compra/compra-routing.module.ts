import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompraComponent } from './compra-components/compra.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'sala/:multiplex/:funcion/:tipoSilla',
        loadChildren: () => import('../sala/sala.module').then( m => m.SalaModule)
      },
      {
        path: 'funcion-pelicula',
        loadChildren: () => import('../funcion-pelicula/funcion-pelicula.module').then( m => m.FuncionPeliculaModule)
      },
      {
        path: 'pago',
        loadChildren: () => import('../pago/pago.module').then( m => m.PagoModule)
      }

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompraRoutingModule { }
