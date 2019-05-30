import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dietas-pacientes',
  templateUrl: './dietas-pacientes.page.html',
  styleUrls: ['./dietas-pacientes.page.scss'],
})
export class DietasPacientesPage implements OnInit {

  public  tituhead: string = 'Mis Dietas';
  
  constructor() { }

  ngOnInit() {
  }

}
