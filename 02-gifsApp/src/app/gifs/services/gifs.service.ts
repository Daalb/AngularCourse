import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchGIFResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _historial: string[] = [];
  public resultados: Gif[] = [];
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private apiKey: string = 'AfYf1DCLKTZkeDK23X8gOwp97LVs5tZT'

  get getHistorial(){
    return [...this._historial]; //*Rompiendo la referencia para no modificar el array original
  }

  constructor(private http: HttpClient){
    this._historial = JSON.parse(localStorage.getItem('historial')!) || []
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || []
  }

  buscarGifs(query: string = ''){
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('historial', JSON.stringify(this._historial))
    }

    const params = new HttpParams()
      .set('api_key',this.apiKey)
      .set('limit','10')
      .set('q', query);

    this.http.get<SearchGIFResponse>(`${ this.servicioUrl }/search`, { params })
      .subscribe( resp  => {
        this.resultados = resp.data;
        localStorage.setItem('resultados',JSON.stringify(resp.data))
      })
  }
  
}
