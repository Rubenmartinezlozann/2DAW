import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'


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
      console.log(this.datos);
    })
  }

  ngAfterViweInit(): void {

  }

}
