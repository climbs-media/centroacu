import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-dieta',
  templateUrl: './login-dieta.page.html',
  styleUrls: ['./login-dieta.page.scss'],
})
export class LoginDietaPage implements OnInit {


  validations_form: FormGroup;
  errorMessage = '';

  validation_messages = {
  'email': [
    { type: 'required', message: 'Correo es Requerido.' },
    { type: 'pattern', message: 'Por Favor ingrese un correo Valido.' }
  ],
  'password': [
    { type: 'required', message: 'Contraseña es Requerida.' },
    { type: 'minlength', message: 'La Contraseña debe tener mas de 5 Digitos.' }
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

  tryLogin(value) {
    this.authService.conectar(value)
    .then(res => {
      this.router.navigate(['nueva-dieta']);
    }, err => {
      this.errorMessage = err.message;
      console.log(err);
    });
  }

  loginAdmin() {
    this.router.navigate(['/login-admin']);
  }

}