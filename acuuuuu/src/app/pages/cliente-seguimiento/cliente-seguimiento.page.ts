import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-seguimiento',
  templateUrl: './cliente-seguimiento.page.html',
  styleUrls: ['./cliente-seguimiento.page.scss'],
})
export class ClienteSeguimientoPage implements OnInit {

<<<<<<< HEAD

  public  tituhead: String = 'Centro ACU 10';

  constructor() { }
=======
  constructor(private router: Router) { }
>>>>>>> ab22a7aaa920a1b675e30f11ebef7b4480872580

  ngOnInit() {
  }

  goEjercicios() {
    this.router.navigate(['/lista-pacientes-ejercicios']);
  }

}
