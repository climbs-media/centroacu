import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.page.html',
  styleUrls: ['./menus.page.scss'],
})
export class MenusPage implements OnInit {


  public  tituhead: String = 'Seguimiento';
  constructor() { }

  ngOnInit() {
  }

}
