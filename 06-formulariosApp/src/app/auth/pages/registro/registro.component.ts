import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { nombreApellidoPattern } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { emailPattern, noPuedeSerMaster } from '../../../shared/validator/validaciones';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.vs.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)],[this.emailValidator]],
    username: ['', [Validators.required,this.vs.noPuedeSerMaster]], 
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]]
    

  }, {
    validators: [this.vs.camposIguales('password','password2')]
  });


  get emailErrorMsg():string{
    const errors = this.miFormulario.get('email')?.errors;
    if( errors?.['required'] ){
      return 'El email es obligatorio'
    }else if(errors?.['pattern']){
      return 'El valor ingresado no tiene formato de correo'
    }else if(errors?.['emailTomado']){ 
      return 'El email ya fue tomado';
    }

    return ''
  }

  constructor( 
    private fb: FormBuilder,
    private vs: ValidatorService,
    private emailValidator: EmailValidatorService
  ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Diego Albor',
      email: 'test1@test.com',
      username: 'dalbor',
      password: '123456',
      password2: '123456'
    })
  }

  campoNoValido(campo:string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }


  submitFormulario(){
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }

}
