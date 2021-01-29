import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleProyectoComponent implements OnInit {

  datos: any;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {  
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get('http://localhost:8000/proyecto/getProyecto/' + id).subscribe(res => {
      this.datos = res;
    })
  }

}
