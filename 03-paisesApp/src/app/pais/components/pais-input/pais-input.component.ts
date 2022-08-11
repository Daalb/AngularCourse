import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  
  @Input() placeholder: string = ''

  debouncer: Subject<string> = new Subject();//*Que se emita cuando dejo de escribir. Es un observable

  termino: string = ''

  ngOnInit(): void { //*Se dispara solo cuando el componente es creado1
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe( valor => {
        this.onDebounce.emit(valor);
      })
  }
  

  buscar(){
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(){
    this.debouncer.next(this.termino); //*Se oprime una tecla dentro del input --> Se llama next --> El next está subscrito y emite el nuevo valor
  }
}
