import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alimentacion-user',
  templateUrl: './alimentacion-user.page.html',
  styleUrls: ['./alimentacion-user.page.scss'],
})
export class AlimentacionUserPage implements OnInit {


  public  tituhead: String = 'Dieta Actual';

  constructor() { }

  ngOnInit() {
  }

}
