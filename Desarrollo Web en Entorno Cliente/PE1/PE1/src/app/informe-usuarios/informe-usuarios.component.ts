import { AfterViewInit, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-informe-usuarios',
  templateUrl: './informe-usuarios.component.html',
  styleUrls: ['./informe-usuarios.component.css']
})
export class InformeUsuariosComponent implements AfterViewInit {

  datos = <any>[];
  fecha: any;

  constructor(private http: HttpClient) { }

  ngAfterViewInit(): void {
    
  }

  obtenerFecha(texto: any) {
    this.fecha = texto.currentTarget.value
  }

  obtenerDatos() {
    this.http.get('http://localhost:8000/usuario/getUsuariosPorFecha/' + this.fecha).subscribe(res => {
      this.datos = res;
    })



  }


}
