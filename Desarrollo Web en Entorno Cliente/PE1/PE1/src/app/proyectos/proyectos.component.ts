import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  datos = <any>[];
  txtNombre: any;
  txtDescripcion: any;
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.obtenerProyectos();
  }
  obtenerProyectos() {
    this.http.get('http://localhost:8000/proyecto/getProyectos').subscribe(res => {
      this.datos = res;
    })
  }

  altaProyecto() {
    this.http.post('http://localhost:8000/proyecto/addProyecto', { 'nombre': this.txtNombre, 'descripcion': this.txtDescripcion, 'imagen': 'i' }).subscribe(res => {
      console.log(res);
      this.obtenerProyectos();
    })

  }

  obtenerNombre(texto: any) {
    this.txtNombre = texto.currentTarget.value
  }

  obtenerDescripcion(texto: any) {
    this.txtDescripcion = texto.currentTarget.value
  }

  eliminarProyecto(id: any) {
    this.http.delete('http://localhost:8000/proyecto/deleteProyecto/' + id).subscribe(res => {
      console.log(res);
      this.obtenerProyectos();
    })

  }
}
