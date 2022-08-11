import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [//*Que cosas contiene este modulo (todo esto es invisible para las cosas fuera del modulo)
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ //*Cosas que quiero que sean visibles fuera del modulo
        ListadoComponent
    ],
    imports: [//*Usualmente acá van módulos
        CommonModule //*Permite utilizar las directivas como el ngIn, ngFor, entre otras cosas
    ]
})
export class HeroesModule{}