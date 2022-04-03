import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompraComponent } from './compra-components/compra.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'sala',
        loadChildren: () => import('../sala/sala.module').then( m => m.SalaModule)
      },
      {
        path: 'funcion-pelicula',
        loadChildren: () => import('../funcion-pelicula/funcion-pelicula.module').then( m => m.FuncionPeliculaModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompraRoutingModule { }
