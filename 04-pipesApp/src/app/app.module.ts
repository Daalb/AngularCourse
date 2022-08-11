import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

//*Módulo personalizado
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//* Cambiar el locale de la app
import localeEsCO from '@angular/common/locales/es-CO';
import localeFr from '@angular/common/locales/fr';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEsCO); //*Ya se registró el idioma
registerLocaleData(localeFr); //*Ya se registró el idioma
registerLocaleData(localeEs); //*Ya se registró el idioma

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRouterModule,
    VentasModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CO'  } //*No solo cambia el idioma, sino también números y monedas del pais
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
