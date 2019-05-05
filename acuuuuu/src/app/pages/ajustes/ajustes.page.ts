import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
})
export class AjustesPage implements OnInit {

 
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {

  }

  goEditar() {
    this.router.navigate(['/cliente-historial']);
  }

}
