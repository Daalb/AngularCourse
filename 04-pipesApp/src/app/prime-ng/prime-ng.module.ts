import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button';
import {FieldsetModule} from 'primeng/fieldset';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';




//*Modulo que unicamente se encargará de centralizar todos los módulos necesarios para trabajar con NgPrime
@NgModule({
  exports: [//*Modulo solo para exportar
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    TableModule,
    ToolbarModule
  ]
})
export class PrimeNgModule { }
