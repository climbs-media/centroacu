import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-bonos-acreditados',
  templateUrl: './bonos-acreditados.page.html',
  styleUrls: ['./bonos-acreditados.page.scss'],
})
export class BonosAcreditadosPage implements OnInit {

  constructor( private modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss(){
    this.modalController.dismiss();
  }

}
