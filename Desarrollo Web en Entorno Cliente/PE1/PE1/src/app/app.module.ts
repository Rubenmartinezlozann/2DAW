import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { InformesComponent } from './informes/informes.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { DetalleProyectoComponent } from './detalleProyecto/detalle.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ChartModule } from 'primeng/chart';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { InformeUsuariosComponent } from './informe-usuarios/informe-usuarios.component';
import { InformeMensajesComponent } from './informe-mensajes/informe-mensajes.component';
import { InformeProyectosComponent } from './informe-proyectos/informe-proyectos.component';
import { DetalleMensajeComponent } from './detalle-mensaje/detalle-mensaje.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProyectosComponent,
    InformesComponent,
    DetalleProyectoComponent,
    UsuariosComponent,
    DetalleUsuarioComponent,
    InformeUsuariosComponent,
    InformeMensajesComponent,
    InformeProyectosComponent,
    DetalleMensajeComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    ChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
