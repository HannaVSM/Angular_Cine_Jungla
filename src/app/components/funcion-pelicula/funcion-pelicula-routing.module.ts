import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionPeliculaComponent } from './funcion-pelicula-components/funcion-pelicula.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',  component: FuncionPeliculaComponent
        
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionPeliculaRoutingModule { }
