import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {
  nombreLower: string = "diego";
  nombreUpper: string = "DIEGO";
  nombreCompleto: string = "dIeGo ALboR"

  fecha: Date = new Date();

}
