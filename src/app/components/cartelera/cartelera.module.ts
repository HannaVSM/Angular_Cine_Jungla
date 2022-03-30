import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CarteleraRoutingModule } from './cartelera-routing.module';
import { CarteleraComponent } from '../cartelera/cartelera-component/cartelera.component';

@NgModule({
  declarations: [
    CarteleraComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CarteleraRoutingModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CarteleraModule { }
