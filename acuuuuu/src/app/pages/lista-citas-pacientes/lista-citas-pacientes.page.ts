import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-lista-citas-pacientes',
  templateUrl: './lista-citas-pacientes.page.html',
  styleUrls: ['./lista-citas-pacientes.page.scss'],
})
export class ListaCitasPacientesPage implements OnInit {

 
  public  tituhead: String = 'Próximas Citas';

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

