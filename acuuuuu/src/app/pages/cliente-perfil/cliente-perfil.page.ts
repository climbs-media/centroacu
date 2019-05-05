import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { PopoverHistorialDieteticoPage } from '../popover-historial-dietetico/popover-historial-dietetico.page';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-perfil',
  templateUrl: './cliente-perfil.page.html',
  styleUrls: ['./cliente-perfil.page.scss'],
})
export class ClientePerfilPage implements OnInit {

  
  items: Array<any>;

  constructor(
    public loadingCtrl: LoadingController,
    private router: Router,
    private route: ActivatedRoute,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    if (this.route && this.route.data) {
      this.getData();
    }
  }

  async getData(){
    const loading = await this.loadingCtrl.create({
      message: 'Espere un momento...',
      duration: 1000
    });
    this.presentLoading(loading);

    this.route.data.subscribe(routeData => {
      routeData['data'].subscribe(data => {
        loading.dismiss();
        this.items = data;
      })
    })
  }

  async presentLoading(loading) {
    return await loading.present();
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
