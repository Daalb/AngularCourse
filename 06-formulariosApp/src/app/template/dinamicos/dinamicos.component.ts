import { Component } from '@angular/core';

interface Persona{
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito{
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html'
})
export class DinamicosComponent   {
  nuevoJuego:string = '';

  persona: Persona = {
    nombre: 'Diego',
    favoritos: [
      { id: 1, nombre: 'Halo'},
      { id: 2, nombre: 'Halo 2'}
    ]
  }


  agregarJuego(){
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push( {...nuevoFavorito} )
    this.nuevoJuego = '';
  }

  guardar(){
    console.log("Enviando formulario...")
  }

  eliminar(index: number){
    this.persona.favoritos.splice(index,1);
  }
}
