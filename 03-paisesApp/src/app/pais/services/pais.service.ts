import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1';
  private apiNewUrl: string = 'https://restcountries.com/v2'

  get httpParams(){
    return new HttpParams().set('fields','fields=name,capital,cca2,flags,population');  //? No se está utilizando pues el .name no es detectado en la tabla
  }
  
  constructor(private http: HttpClient) { }
  
  buscarPais( termino: string): Observable<Country[]>{//*El Observable es de tipo generico
    const url = `${this.apiUrl}/name/${termino}`
    return this.http.get<Country[]>(url)
  }

  buscarCapital( termino: string): Observable<Country[]>{//*El Observable es de tipo generico
    const url = `${this.apiUrl}/capital/${termino}`
    return this.http.get<Country[]>(url)
  }

  getPaisById(id: string):Observable<Country>{
    const url = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Country>(url)
  }

  buscarRegion(region: string):Observable<Country[]>{
    const url = `${this.apiNewUrl}/regionalbloc/${region}`
    return this.http.get<Country[]>(url)
  }

  
}
