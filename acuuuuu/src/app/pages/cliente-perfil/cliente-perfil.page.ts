import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PopoverHistorialDieteticoPage } from '../popover-historial-dietetico/popover-historial-dietetico.page';

@Component({
  selector: 'app-cliente-perfil',
  templateUrl: './cliente-perfil.page.html',
  styleUrls: ['./cliente-perfil.page.scss'],
})
export class ClientePerfilPage implements OnInit {

  constructor( private modalController: ModalController) { }

  ngOnInit() {
  }


   mostrarhisto() {

     this.modalController.create({
       component: PopoverHistorialDieteticoPage,
       componentProps: {
       }
     }).then(modal => {
       modal.present();
     });
  }


}
