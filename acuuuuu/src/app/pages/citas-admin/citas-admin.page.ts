import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-citas-admin',
  templateUrl: './citas-admin.page.html',
  styleUrls: ['./citas-admin.page.scss'],
})
export class CitasAdminPage implements OnInit {

  personabuscar: string;
  encontrado = false;
  items: Array<any>;
  searchText = '';
  isAdmin: any = null;
  isPasi: any = null;
  userUid: string = null;


  constructor(public alertController: AlertController,
              private loadingCtrl: LoadingController,
              private router: Router,
              private route: ActivatedRoute, ) {
  }

  ngOnInit() {
    if (this.route && this.route.data) {
      this.getData();
    }
  }

  async getData() {
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
