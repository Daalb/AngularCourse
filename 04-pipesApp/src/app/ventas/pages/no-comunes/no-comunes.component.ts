import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent   {
  //i18nSelect
  nombre: string = "Diego";
  genero: string = "masculino";
  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria','Pedro','Jose','Alberto']
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': `tenemos # clientes esperando`
  }

  cambiarCliente(){
    if(this.nombre === "Diego"){
      this.nombre = 'Gabriela';
      this.genero = 'femenino'
    }else{
      this.nombre = "Diego";
      this.genero = 'masculino';
    }
    // this.nombre = 'Gabriela';
    // this.genero = 'femenino'
  }

  borrarCliente(){
    this.clientes.pop();
  }

  agregarCliente(){
    this.clientes.push("Cliente");
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Diego',
    edad: 22,
    direccion: 'Direccion'
  }

  //JSON Pipe
  animal = [
    {
      especie: "Gato",
      patas: 4,
      color: "naranja"
    },
    {
      especie: "Perro",
      patas: 4,
      color: "negro"
    }
  ]

  //Async Pipe
  miObservable = interval(1000);//*Emitirá valores númericos cada 1 segundo

  valorPromesa = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('Data de la promesa')
    },3500)
  })
}
