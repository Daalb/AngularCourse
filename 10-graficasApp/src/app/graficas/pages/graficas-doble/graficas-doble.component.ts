import { Component } from '@angular/core';
import { ChartConfiguration, ChartData } from 'chart.js';

@Component({
  selector: 'app-graficas-doble',
  templateUrl: './graficas-doble.component.html'
})
export class GraficasDobleComponent{

   // proveedoresData: ChartDataSets[] = [
  //   { data: [ 100,200,300,400,500 ], label: 'Vendedor A' },
  //   { data: [ 50,250,30, 450,200 ], label: 'Vendedor B' },
  // ];
  
  proveedoresLabels: string[] = ['2021', '2022','2023','2024','2025'];
  
  // productoData: ChartDataSets[] = [
  //   { data: [ 200, 300,400,300, 100 ], label: 'Carros', backgroundColor: 'blue' },
  // ];
 
  productosOpciones: ChartConfiguration['options'] = {
    responsive: true,
    indexAxis: 'y', //Esto hace que sea horizontal el gráfico
  }
 
  proveedoresData: ChartData<'bar'> = {
    labels: this.proveedoresLabels,
    datasets: [
      { data: [ 100,200,300,400,500 ], label: 'Vendedor A' },
      { data: [ 50,250,30, 450,200 ], label: 'Vendedor B' },
    ]
  }
 
  productosData: ChartData<'bar'> = {
    labels: this.proveedoresLabels,
    datasets: [
      { data: [ 200, 300,400,300, 100 ], label: 'Carros', backgroundColor: 'blue' },
    ]
  }


}
