import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { InformesComponent } from './informes/informes.component';
import { HttpClientModule } from '@angular/common/http';
import { GraficoComponent } from './grafico/grafico.component';
import { BotonDetallesComponent } from './boton-detalles/boton-detalles.component';
import { BotonEliminarComponent } from './boton-eliminar/boton-eliminar.component';
import { BotonAltaComponent } from './boton-alta/boton-alta.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProyectosComponent,
    InformesComponent,
    GraficoComponent,
    BotonDetallesComponent,
    BotonEliminarComponent,
    BotonAltaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
