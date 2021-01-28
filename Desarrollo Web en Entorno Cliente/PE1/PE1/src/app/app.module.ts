import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { InformesComponent } from './informes/informes.component';
import { HttpClientModule } from '@angular/common/http';
import { GraficoComponent } from './grafico/grafico.component';
import { TableModule } from 'primeng/table';
import { DetalleComponent } from './detalle/detalle.component';
import { AltaProyectoComponent } from './alta-proyecto/alta-proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProyectosComponent,
    InformesComponent,
    GraficoComponent,
    DetalleComponent,
    AltaProyectoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
