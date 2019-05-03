import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { BonosAcreditadosPage } from '../bonos-acreditados/bonos-acreditados.page';

@Component({
  selector: 'app-bono-citas',
  templateUrl: './bono-citas.page.html',
  styleUrls: ['./bono-citas.page.scss'],
})
export class BonoCitasPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  Acreditados(){
    this.modalController.create({
      component: BonosAcreditadosPage,
      componentProps: {
  
      }
    }).then(modal => {
      modal.present();
    });
  }

}
