import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CompraComponent } from '../compra/compra-components/compra.component';
import { FuncionPeliculaComponent } from './funcion-pelicula-components/funcion-pelicula.component';
import { FuncionPeliculaRoutingModule } from './funcion-prelicula.module';

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
