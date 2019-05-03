import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.page.html',
  styleUrls: ['./home-admin.page.scss'],
})
export class HomeAdminPage implements OnInit {

  personabuscar: string;
  encontrado: boolean = false;

  constructor() { }

  ngOnInit() {
  }



  buscamos() {
    if(this.personabuscar == 'juan') {

      this.encontrado = true;
    }
   }

}
