import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {



  validations_form: FormGroup;
  errorMessage = '';
  successMessage = '';

  validation_messages = {
    'email': [
      {type: 'required', message: 'Correo Electronico es Requerido.'},
      {type: 'pattern', message: 'Inserte un Correo Electronico Real.'}
    ],
    'password': [
      {type: 'required', message: 'Contraseña Requerida.'},
      {type: 'minlength', message: 'La Contraseña debe tener mas de 5 digitos.'}
    ],
  };

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
  }

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

  tryRegistrar(value) {
    this.authService.doRegistrarPaciente(value)
      .then(res => {
        console.log(res);
        this.errorMessage = '';
        this.successMessage = 'Tu Cuenta fue Creada.';
        this.router.navigate(['/home-admin']);
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = '';
      });
  }


}
