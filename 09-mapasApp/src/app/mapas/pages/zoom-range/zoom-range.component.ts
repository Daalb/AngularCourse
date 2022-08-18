import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `.mapa-container{
      width: 100%;
      height: 100%;
    }
    .row{
      background-color: white;
      border-radius: 5px;
      bottom: 50px;
      left: 50px;
      padding: 10px;
      position: fixed;
      z-index: 9999999;
    }
    `
  ]
})
export class ZoomRangeComponent implements AfterViewInit { //*En vez de OnInit se usa AfterViewInit(después de que la vista ha sido inicializada y esto es porque la referencia mapa no ha cargado ni en el constructor ni en el onInit)

  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;

  constructor() { }

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement, 
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.82746784197954,11.013522058915436],//*Primero longitud luego latitud
      zoom: 15
    });
  }


  zoomOut(){
    this.mapa.zoomOut();
  }

  zoomIn(){
    this.mapa.zoomIn();
  }

}
