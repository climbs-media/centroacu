import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-citas',
  templateUrl: './gestion-citas.page.html',
  styleUrls: ['./gestion-citas.page.scss'],
})
export class GestionCitasPage implements OnInit {


  public  tituhead: String = 'Gestión de Citas';
  constructor() { }

  ngOnInit() {
  }

}
