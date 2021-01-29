import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  datos = <any>[];
  txtNombre: any;
  txtContrasenya: any;
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.http.get('http://localhost:8000/usuario/getUsuarios').subscribe(res => {
      this.datos = res;
    })
  }
  altaUsuario() {
    this.http.post('http://localhost:8000/usuario/addUsuario', { 'name': this.txtNombre, 'password': this.txtContrasenya }).subscribe(res => {
      console.log(res);
      this.obtenerUsuarios();
    })
  }

  obtenerNombre(texto: any) {
    this.txtNombre = texto.currentTarget.value
  }

  obtenerDescripcion(texto: any) {
    this.txtContrasenya = texto.currentTarget.value
  }

  eliminarUsuario(id: any) {
    this.http.delete('http://localhost:8000/usuario/deleteUsuario/' + id).subscribe(res => {
      console.log(res);
      this.obtenerUsuarios();
    })
  }

}
