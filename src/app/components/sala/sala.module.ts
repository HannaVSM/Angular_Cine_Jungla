import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SalaComponent } from './sala-component/sala.component';
import { SalaRoutingModule } from './sala-routing.module';

@NgModule({
  declarations: [
    SalaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SalaRoutingModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SalaModule { }
