import { Component } from '@angular/core';

//* Minimo se le pasasn dos argumentos selector y templeate(o puede ser templateUrl)
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Contador App';
  numero: number = 10; 
  base: number = 5;


  acumular( valor: number ){
    this.numero += valor;
  }

  // sumar(){
  //   this.numero += 1;
  // }

  // restar(){
  //   this.numero -= 1;
  // }
}

