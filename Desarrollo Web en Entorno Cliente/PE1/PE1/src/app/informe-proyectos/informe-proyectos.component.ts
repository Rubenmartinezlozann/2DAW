import { AfterViewInit, Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-informe-proyectos',
  templateUrl: './informe-proyectos.component.html',
  styleUrls: ['./informe-proyectos.component.css']
})
export class InformeProyectosComponent implements AfterViewInit {

  datosGrafico: any;
  datos = <any>[];
  labels = <any>[];
  valores = <any>[];
  titulo = 'Proyectos con tiempo estimado menor a 5 horas';

  constructor(private http: HttpClient) {

  }

  ngAfterViewInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos() {
    this.http.get('http://localhost:8000/proyecto/getProyectosMenorTiempo/5').subscribe(res => {
      this.datos = res;
      console.log(res)
      this.datos.forEach((element: { nombre: any; tiempoEstimado: any; }) => {
        this.labels.push(element.nombre);
        this.valores.push(element.tiempoEstimado);
      });
      this.datosGrafico = {
        labels: this.labels,
        datasets: [
          {
            label: this.titulo,
            backgroundColor: '#42A5F5',
            borderColor: '#1E88E5',
            data: this.valores
          },
        ]
      }
    })

  }



}
