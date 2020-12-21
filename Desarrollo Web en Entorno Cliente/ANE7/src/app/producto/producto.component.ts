import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-producro',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class ProductoComponent {
  @Input() codigo = '';
  @Input() nombre = '';
  @Input() descripcion = '';
  @Input() precio = '';
  @Input() stock = '';
  @Input() urlImagen = '';
}
