import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informe-mensajes',
  templateUrl: './informe-mensajes.component.html',
  styleUrls: ['./informe-mensajes.component.css']
})
export class InformeMensajesComponent implements OnInit {

  datos: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos(){
    this.http.get('http://localhost:8000/contacto/getContactos').subscribe(res => {
      this.datos = res;
    })
  }

}
