import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-alta-proyecto',
  templateUrl: './alta-proyecto.component.html',
  styleUrls: ['./alta-proyecto.component.css']
})
export class AltaProyectoComponent implements OnInit {



  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  

  AddProyecto(nombre: any, descripcion: any) {
    
    //this.http.post('http://localhost:8000/proyecto/addProyecto', { nombre: nombre, descripcion: descripcion });
  }
}
