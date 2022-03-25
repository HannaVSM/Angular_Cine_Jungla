import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompraComponent } from './components/compra/compra.component';
import { CarteleraComponent } from './components/cartelera/cartelera.component';
import { FuncionPeliculaComponent } from './components/funcion-pelicula/funcion-pelicula.component';
import { SalaComponent } from './components/sala/sala.component';
import { PagoComponent } from './components/pago/pago.component';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
