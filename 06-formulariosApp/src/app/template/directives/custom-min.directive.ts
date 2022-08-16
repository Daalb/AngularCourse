import { Directive, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS, NonNullableFormBuilder, Validator } from "@angular/forms";


//*Selector --> La manera en que se le dice a angular como va a usar la directiva. Al colocar la directiva personalizada e permite extender la funcionalidad de un componente HTML
@Directive({
    selector: "[customMin][ngModel]", //* Solo se puede usar si se le coloca la directiva custom-min y tiene un ngModel
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirective,
        multi: true
    }]
})
export class CustomMinDirective implements Validator{
    @Input() minimo!: number;
    
    constructor(){}

    validate(control: FormControl){
        const inputValue = control.value
        return (inputValue < this.minimo) ? {'customMin':true} : null;
    }
}