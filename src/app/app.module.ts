import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompraComponent } from './components/compra/compra.component';
import { CarteleraComponent } from './components/cartelera/cartelera.component';
import { FuncionPeliculaComponent } from './components/funcion-pelicula/funcion-pelicula.component';
import { SalaComponent } from './components/sala/sala.component';
import { PagoComponent } from './components/pago/pago.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CarteleraComponent,
    CompraComponent,
    FuncionPeliculaComponent,
    IniciarSesionComponent,
    PagoComponent,
    PerfilComponent,
    RegistrarseComponent,
    SalaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  exports: [AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
