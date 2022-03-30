import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CompraRoutingModule } from './compra-routing.module';
import { CompraComponent } from '../compra/compra-components/compra.component';

@NgModule({
  declarations: [
    CompraComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CompraRoutingModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CompraModule { }
