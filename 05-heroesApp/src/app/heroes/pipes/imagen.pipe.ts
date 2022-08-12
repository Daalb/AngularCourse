import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interrfaces';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(heroe:Heroe): string {
    return `assets/assets/heroes/${heroe.id}.jpg`;
  }

}
