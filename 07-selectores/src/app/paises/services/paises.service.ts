import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { PaisSmall, Pais } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  //private _regiones: string[] = ['European Union','European Free Trade Association','Caribean Community','Pacific Alliance','Africa Union','Union of South American Nations','Eurasian Economic Union','Araba League','Essociation of Southeast Asian Nations','Central American Integration System','Nort American Free Trade Agreement','South Asian Association for Regional Cooperation']
  private _baseUrl: string = 'https://restcountries.com/v2'
  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

  get regiones(){
    return [...this._regiones]
  }
  constructor(
    private http: HttpClient
  ) { }

  getPaisesPorRegion(region:string): Observable<PaisSmall[]>{
    return this.http.get<PaisSmall[]>(`${this._baseUrl}/region/${region}?fields=alpha3Code,name`)
  }    

  getPaisPorCodigo(codigo: string): Observable<Pais | null>{
    if(!codigo) return of(null)
    return this.http.get<Pais>(`${this._baseUrl}/alpha/${codigo}`)
  }


  getPaisPorCodigoSmall(codigo: string): Observable<PaisSmall>{
    return this.http.get<PaisSmall>(`${this._baseUrl}/alpha/${codigo}?fields=alpha3Code,name`)
  }

  getPaisesPorCodigos(borders: string[]): Observable<PaisSmall[]>{
    if(!borders) return of([])

    const peticiones: Observable<PaisSmall>[] = [];

    borders.forEach( codigo => {
      const peticion = this.getPaisPorCodigoSmall(codigo);//*No se está ejecutando la petición, pues no tiene .subscribe. Solo se están almacenando
      peticiones.push(peticion);
    });

    return combineLatest(peticiones); //*Se encarga de ejecutar todas las peticiones dentro de un array de observables

  }

}
