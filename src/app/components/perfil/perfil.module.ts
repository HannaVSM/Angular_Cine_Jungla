import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilComponent } from '../perfil/perfil-components/perfil.component';

@NgModule({
  declarations: [
    PerfilComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PerfilRoutingModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class PerfilModule { }
