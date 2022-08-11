import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas' //*Aca es como llamaremos el pipe
})
export class MayusculasPipe implements PipeTransform{
    transform(value:string,enMayusculas:boolean = true ):string {
        return enMayusculas ? value.toUpperCase() : value.toLocaleLowerCase()
    }
}