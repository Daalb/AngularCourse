import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent  {
  constructor(private gifsService: GifsService){}//*Inyeccion del servicio

  get historial(){
    return this.gifsService.getHistorial
  }

  buscar(termino: string){
    this.gifsService.buscarGifs(termino)
  }

}
