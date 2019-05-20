import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-seguimiento-user',
  templateUrl: './cliente-seguimiento-user.page.html',
  styleUrls: ['./cliente-seguimiento-user.page.scss'],
})
export class ClienteSeguimientoUserPage implements OnInit {


  public  tituhead: String = 'Centro ACU 10';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goEjercicios() {
    this.router.navigate(['/diario-ejercicio-user']);
  }

}
