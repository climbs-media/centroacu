import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-pacientes-peso-user',
  templateUrl: './lista-pacientes-peso-user.page.html',
  styleUrls: ['./lista-pacientes-peso-user.page.scss'],
})
export class ListaPacientesPesoUserPage implements OnInit {

  items: Array<any>;
  searchText = '';
  

  constructor(public alertController: AlertController, 
              private loadingCtrl: LoadingController,
              private router: Router,
              private route: ActivatedRoute,) {
  }

  ngOnInit() {
    if (this.route && this.route.data) {
      this.getData();
    }
  }

  async getData(){
    const loading = await this.loadingCtrl.create({
      message: 'Espere un momento...'
    });
    this.presentLoading(loading);

    this.route.data.subscribe(routeData => {
      routeData['data'].subscribe(data => {
        loading.dismiss();
        this.items = data;
      });
    });
  }

  async presentLoading(loading) {
    return await loading.present();
  }

}

