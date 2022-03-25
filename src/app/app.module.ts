import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompraComponent } from './components/compra/compra.component';
import { CarteleraComponent } from './components/cartelera/cartelera.component';
import { FuncionPeliculaComponent } from './components/funcion-pelicula/funcion-pelicula.component';
import { SalaComponent } from './components/comida/sala.component';
import { PagoComponent } from './components/pago/pago.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { PerfilComponent } from './components/perfil/perfil.component';

@NgModule({
  declarations: [

  
    IniciarSesionComponent,
         RegistrarseComponent,
         PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
