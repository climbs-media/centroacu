import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-citas-user',
  templateUrl: './gestion-citas-user.page.html',
  styleUrls: ['./gestion-citas-user.page.scss'],
})
export class GestionCitasUserPage implements OnInit {


  public  tituhead: String = 'Gestión de Citas Paciente';
  constructor() { }

  ngOnInit() {
  }

}
