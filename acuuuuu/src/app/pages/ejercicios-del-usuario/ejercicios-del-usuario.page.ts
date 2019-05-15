import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ejercicios-del-usuario',
  templateUrl: './ejercicios-del-usuario.page.html',
  styleUrls: ['./ejercicios-del-usuario.page.scss'],
})
export class EjerciciosDelUsuarioPage implements OnInit {

  items: Array<any>;

  public  tituhead: String = 'Centro ACU 10';
  constructor(
    private toastCtrl: ToastController,
    private http: HttpClient,
    public loadingCtrl: LoadingController,
    private router: Router,
    private route: ActivatedRoute,
    public navCtrl: NavController,

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

