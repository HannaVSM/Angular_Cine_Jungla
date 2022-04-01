import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SnacksRoutingModule } from './snacks-routing.module';
import { SnacksComponent } from '../snacks/snacks-components/snacks.component';

@NgModule({
  declarations: [
    SnacksComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SnacksRoutingModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SnacksModule { }
