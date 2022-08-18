import { Component, ElementRef, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
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
      width: 400px;
    }
    `
  ]
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy { //*En vez de OnInit se usa AfterViewInit(después de que la vista ha sido inicializada y esto es porque la referencia mapa no ha cargado ni en el constructor ni en el onInit)

  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 10;
  center: [number,number] = [-74.82746784197954,11.013522058915436];

  constructor() { }

  ngOnDestroy(): void {//*Para evitar que los eventos queden escuchando cuando el componente "muera". Esto es para asegurar que los listeners mueran con el componente 
    this.mapa.off('zoom', () => {});
    this.mapa.off('zoomend', () => {});
    this.mapa.off('move', () => {});

  }

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement, 
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,//*Primero longitud luego latitud
      zoom: this.zoomLevel
    });

    this.mapa.on('zoom', () => {
      this.zoomLevel =  this.mapa.getZoom();  
    })//*Listener

    this.mapa.on('zoomend', () => {
      if(this.mapa.getZoom() > 18) this.mapa.zoomTo(18);
    })//*Listener

    this.mapa.on('move', (e) => {
      const target = e.target; 
      const { lng, lat } = target.getCenter();
      this.center = [lng, lat]; 
    })

  }

  zoomOut(){
    this.mapa.zoomOut();
  }

  zoomIn(){
    this.mapa.zoomIn();
  }

  zoomCambio(valor : string){
    this.mapa.zoomTo(Number(valor));
  }

}
