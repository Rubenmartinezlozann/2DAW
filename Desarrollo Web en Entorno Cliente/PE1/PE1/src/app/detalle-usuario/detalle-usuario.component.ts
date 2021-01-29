import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {

  datos: any;
  txtAntiguaContrasenya: any;
  txtNuevaContrasenya: any;
  txtConfirmacionContrasenya: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.http.get('http://localhost:8000/usuario/getUsuario/' + this.route.snapshot.paramMap.get('id')).subscribe(res => {
      this.datos = res;
    })
  }

  obtenerAntiguaContrasenya(texto: any) {
    this.txtAntiguaContrasenya = texto.currentTarget.value
  }

  obtenerNuevaContrasenya(texto: any) {
    this.txtNuevaContrasenya = texto.currentTarget.value
  }

  obtenerConfirmacionContrasenya(texto: any) {
    this.txtConfirmacionContrasenya = texto.currentTarget.value
  }

  verificaAntiguaContrasenya(contrasenya: any): boolean {
    if (contrasenya = this.datos.password) {
      return true;
    }
    return false;
  }

  verificaNuevaContrasenya(contrasenya1: any, contrasenya2: any): boolean {
    if (contrasenya1 === contrasenya2) {
      return true;
    }
    return false;
  }

  cambiarContrasenya() {
    if (this.verificaAntiguaContrasenya(this.txtAntiguaContrasenya) && this.verificaNuevaContrasenya(this.txtNuevaContrasenya, this.txtConfirmacionContrasenya)) {
      this.http.put('http://localhost:8000/usuario/updateUsuario/' + this.datos.id, { 'name': this.datos.name, 'password': this.txtNuevaContrasenya }).subscribe(res => {
        console.log(res);
        this.obtenerUsuarios();
      })
    }
  }
}

