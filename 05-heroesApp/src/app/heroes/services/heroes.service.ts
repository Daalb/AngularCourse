import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroes.interrfaces';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]>{//*Observable<Heroe[]> Esto es solo para saber que retorna
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`)
  }

  getHeroePorId(id:string): Observable<Heroe>{
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`)
  }

  getSugerencias(termino: string): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes?q=${termino}&_limit=6`)
  }


}
