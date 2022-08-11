import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent  {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef;//*El elementRef es un Generico

  constructor( private gifsService: GifsService){} //*Se inyecta el servicio

  buscar(){
    const valor = this.txtBuscar.nativeElement.value;
    if(valor.trim().length === 0) return;
    this.gifsService.buscarGifs(valor);
    this.txtBuscar.nativeElement.value = '';
  }
}
