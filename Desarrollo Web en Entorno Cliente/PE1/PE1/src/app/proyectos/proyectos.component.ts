import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {


  constructor(private http: HttpClient) {

  }

  getProyectos() {
    return this.http.get('http://localhost:8000/proyecto/getProyectos');
  }

  ngOnInit(): void {

  }

}
