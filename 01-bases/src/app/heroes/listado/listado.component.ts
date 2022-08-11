import { Component  } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

export class ListadoComponent{
  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor'];
  heroeBorrado: string = '';

  borrarTodo(): void {
    this.heroes = [];
  }

  borrarHeroe(): void {
    const borrado = this.heroes.pop();
    this.heroeBorrado = borrado || "";
  }
  
}


