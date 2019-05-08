import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-seguimiento',
  templateUrl: './cliente-seguimiento.page.html',
  styleUrls: ['./cliente-seguimiento.page.scss'],
})
export class ClienteSeguimientoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goEjercicios() {
    this.router.navigate(['/lista-pacientes-ejercicios']);
  }

}
