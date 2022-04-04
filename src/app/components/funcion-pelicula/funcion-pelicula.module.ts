import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CompraComponent } from '../compra/compra-components/compra.component';
import { FuncionPeliculaComponent } from './funcion-pelicula-components/funcion-pelicula.component';
import { FuncionPeliculaRoutingModule } from './funcion-pelicula-routing.module';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';




@NgModule({
  declarations: [
    FuncionPeliculaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FuncionPeliculaRoutingModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatRadioModule
    
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class FuncionPeliculaModule { }
