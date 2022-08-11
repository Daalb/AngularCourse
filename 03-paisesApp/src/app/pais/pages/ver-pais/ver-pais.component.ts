import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { } //*Antes de que se inicilice

  ngOnInit(): void { //*Componente inicializado

    //*Manera reducida
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.paisService.getPaisById(id)),
        tap(console.log)
      )
      .subscribe(pais => this.pais = pais[0] );

    // this.activatedRoute.params
    //   .subscribe( ({ id }) => {
    //     console.log(id)
    //     this.paisService.getPaisById(id)
    //       .subscribe(pais => {
    //         console.log(pais)
    //       })
    //   })
  }

}
