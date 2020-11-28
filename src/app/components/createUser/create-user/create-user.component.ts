import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppReqResService } from 'src/app/services/app-req-res.service';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styles: [
  ]
})
export class CreateUserComponent implements OnInit {

  // variable para almacenar formulario
  form: FormGroup;
  formData: FormData;
  response: any = [];
  submited: boolean = false;

  // Getters de los controles
  get validName(){
    return this.form.get('name').invalid && this.form.get('name').touched;
  }
  get validJob(){
    return this.form.get('job').invalid && this.form.get('job').touched;
  }
  get validEmail(){
    return this.form.get('email').invalid && this.form.get('email').touched;
  }

  // Getters para password (validación personalizada)
  get Pass1(){
    return this.form.get('pass1').invalid && this.form.get('pass1').touched;
  }
  get Pass2(){
    const pass1 = this.form.get('pass1').value;
    const pass2 = this.form.get('pass2').value;
    // IF de operador temario
    return (pass1 === pass2)? false : true;

  }

  constructor( private fB: FormBuilder, private CustomVal: ValidationService, private appReqRes: AppReqResService ) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(){
    this.form = this.fB.group({
      // El primer valor ('') representa el valor por defecto de cada control 
      // Como segundo estaremos agregando las validaciones
      name: ['', [ Validators.required, Validators.minLength(4) ]],
      job: ['', [ Validators.required, Validators.minLength(4) ]],
      email: ['', [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$') ]],
      pass1: ['', Validators.required],
      pass2: ['', Validators.required]
    },{
      validators: this.CustomVal.matchPassword('pass1', 'pass2')
    });
  }

  enviar(){
    console.log(this.form);
    if(this.form.invalid) {
      return Object.values( this.form.controls ).forEach( control => {
        control.markAsTouched();
        this.submited = false;
      } )
    }else{
      let data = {
        'name': this.form.get('name').value,
        'job': this.form.get('job').value,
        'email': this.form.get('email').value,
        'password': this.form.get('pass1').value,
      }

      this.appReqRes.addUsers(data).subscribe( (data: any) => {
        this.response = data;
        this.submited = true;
        console.log(this.response);
      })
      
    }
  }

  addOther(){
    this.submited = false;
    this.form.reset();
  }

}
