import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent implements OnInit{
  // miFormulario: FormGroup = new FormGroup({
  //   'nombre': new FormControl('RTX 4080TI'),
  //   'precio': new FormControl(1500),
  //   'existencias': new FormControl(5),

  // })

  miFormulario: FormGroup = this.fb.group({
    nombre:[null, [Validators.required, Validators.minLength(3)] ], //*Valor default, validadores sincronos, validadores asincronos
    precio: [null, [Validators.required,Validators.min(0)]],
    existencias: [null,  [Validators.required,Validators.min(0)]]
  })
  constructor( private fb: FormBuilder) { }

  ngOnInit(){
    this.miFormulario.reset({
      nombre: 'asdads',
      precio: 1600,
      ecxistencias: 10
    })
  }
  
  campoEsValido(campo:string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    this.miFormulario.reset();
    console.log(this.miFormulario.value);
  }


}
