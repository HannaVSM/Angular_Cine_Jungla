import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagoRoutingModule } from './pago-routing.module';
import { PagoComponent } from '../pago/pago-components/pago.component';

@NgModule({
  declarations: [
    PagoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagoRoutingModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class PagoModule { }
