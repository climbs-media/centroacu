import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-paciente',
  templateUrl: './login-paciente.page.html',
  styleUrls: ['./login-paciente.page.scss'],
})
export class LoginPacientePage implements OnInit {


  validations_form: FormGroup;
  errorMessage = '';
  passReset: boolean = false;

  validation_messages = {
  'email': [
    { type: 'required', message: 'Correo es Requerido.' },
    { type: 'pattern', message: 'Por favor ingrese un correo válido.' }
  ],
  'password': [
    { type: 'required', message: 'Contraseña es requerida.' },
    { type: 'minlength', message: 'La contraseña debe tener mas de 5 Digitos.' }
  ]
};

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

 

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }

  formErrors = {
    'email': 'Email Incorrecto',
    'password': 'Contraseña Incorrecta'
  };


  tryLogin(value) {
    this.authService.conectar(value)
    .then(res => {
      this.router.navigate(['/tabs/tab1']);
    }, err => {
      this.errorMessage = err.message;
      console.log(err);
    });
  }

  loginAdmin() {
    this.router.navigate(['/login-admin']);
  }
  resetPassword() {
    this.authService.resetPassword(this.validations_form.value['email'])
    .then(() => this.passReset = true)
  }

}
