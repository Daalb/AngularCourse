import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

 
import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';

import { DbzService } from './services/dbz.service';



@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent //*Usar componentes DENTRO del módulo
  ],
  exports: [
    MainPageComponent //*Usar componentes FUERA del módulo
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [//*Son todos los servicios que se van a usar
    DbzService
  ]
})
export class DbzModule { }
