import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { DetalleProyectoComponent } from './detalleProyecto/detalle.component';
import { InformeMensajesComponent } from './informe-mensajes/informe-mensajes.component';
import { InformeProyectosComponent } from './informe-proyectos/informe-proyectos.component';
import { InformeUsuariosComponent } from './informe-usuarios/informe-usuarios.component';
import { InformesComponent } from './informes/informes.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  { path: 'informes', component: InformesComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'detalleProyecto/:id', component: DetalleProyectoComponent },
  { path: 'detalleUsuario/:id', component: DetalleUsuarioComponent },
  { path: 'informeUsuarios', component: InformeUsuariosComponent },
  { path: 'informeProyectos', component: InformeProyectosComponent },
  { path: 'informeMensajes', component: InformeMensajesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
