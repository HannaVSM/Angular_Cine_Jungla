import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FuncionPeliculaRoutingModule } from './funcion-pelicula-routing.module';
import { FuncionPeliculaComponent } from '../funcion-pelicula/funcion-pelicula-components/funcion-pelicula.component';

@NgModule({
  declarations: [
    FuncionPeliculaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FuncionPeliculaRoutingModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class FuncionPeliculaModule { }
