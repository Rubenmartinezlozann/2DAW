import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AltaProyectoComponent } from '../alta-proyecto/alta-proyecto.component';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  datos = <any>[];

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/proyecto/getProyectos').subscribe(res => {
      this.datos = res;
    })

  }
  AddProyecto(nombre: any, descripcion: any) {
    this.http.post<any>('http://localhost:8000/proyecto/addProyecto', { nombre: nombre, descripcion: descripcion });
  }
}
