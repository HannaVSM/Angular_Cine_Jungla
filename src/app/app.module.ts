import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompraComponent } from './components/compra/compra-components/compra.component';
import { FuncionPeliculaComponent } from './components/funcion-pelicula/funcion-pelicula-components/funcion-pelicula.component';
import { SalaComponent } from './components/sala/sala-component/sala.component';
import { PagoComponent } from './components/pago/pago-components/pago.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PerfilComponent } from './components/perfil/perfil-components/perfil.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './general/dashboard/dashboard.component';
import { SnacksComponent } from './components/snacks/snacks-components/snacks.component';
import { CargarScriptsService } from './cargar-scripts.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatTabsModule} from '@angular/material/tabs';
@NgModule({
  declarations: [
    AppComponent,
    // CarteleraComponent,
    // CompraComponent,
    // FuncionPeliculaComponent,
     IniciarSesionComponent,
    // PagoComponent,
    // PerfilComponent,
    // RegistrarseComponent,
    // SalaComponent,
    // DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [
    CargarScriptsService
  ],
  exports: [AppRoutingModule],
  bootstrap: [AppComponent]

})
export class AppModule { }
