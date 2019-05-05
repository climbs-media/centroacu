import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente-historial',
  templateUrl: './cliente-historial.page.html',
  styleUrls: ['./cliente-historial.page.scss'],
})
export class ClienteHistorialPage implements OnInit {

  items: Array<any>;

  constructor(
    public loadingCtrl: LoadingController,
    private router: Router,
    private route: ActivatedRoute
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
}
