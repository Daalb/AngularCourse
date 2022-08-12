import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interrfaces';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(heroe:Heroe): string {
  if(!heroe.id && !heroe.alt_img){
      return `assets/assets/no-image.png`;
    }else if(heroe.alt_img){
      return heroe.alt_img
    }else{
      return `assets/assets/heroes/${heroe.id}.jpg`;
    }
  }

}
