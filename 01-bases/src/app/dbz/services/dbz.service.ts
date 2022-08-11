import { Injectable } from "@angular/core";

import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService{
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ]

  get personajes(): Personaje[]{
    return [...this._personajes] //*Esto es para romper la referencia directa a _personajes, pues los objetos son pasados por referencia y puede que el array sea manipulado y mutado. Básicamente se crea un array nuevo con los elementos que ya tiene el array original
  }
  
  constructor(){}

  agregarPersonaje(personaje: Personaje): void{
    this._personajes.push(personaje)
  }
}