import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
// import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent
  ],
  imports: [
    RouterModule,//*Si bien se define dos veces no lo importa dos veces, pues ya angular detecta donde fue importado antes
    CommonModule,
    // AppRoutingModule //*Como nada más se usará una sola cosa del RouterModule no es necesidad de llamar este módulo
  ]
})
export class SharedModule { }
