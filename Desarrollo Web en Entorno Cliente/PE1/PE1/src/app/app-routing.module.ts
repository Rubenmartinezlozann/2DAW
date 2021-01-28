import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaProyectoComponent } from './alta-proyecto/alta-proyecto.component';
import { DetalleComponent } from './detalle/detalle.component';
import { HomeComponent } from './home/home.component';
import { InformesComponent } from './informes/informes.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'informes', component: InformesComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: 'altaProyecto', component: AltaProyectoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
