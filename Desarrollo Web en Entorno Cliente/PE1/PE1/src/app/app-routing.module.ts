import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { DetalleProyectoComponent } from './detalleProyecto/detalle.component';
import { InformesComponent } from './informes/informes.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  { path: 'informes', component: InformesComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'detalleProyecto/:id', component: DetalleProyectoComponent },
  { path: 'detalleUsuario/:id', component: DetalleUsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
