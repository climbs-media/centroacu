import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-diario-dietetico',
  templateUrl: './diario-dietetico.page.html',
  styleUrls: ['./diario-dietetico.page.scss'],
})
export class DiarioDieteticoPage implements OnInit {

  items: Array<any>;
  
  constructor(public loadingCtrl: LoadingController,
    private router: Router,
    private route: ActivatedRoute, ) { }
  public  tituhead: String = 'Diario Dietetico';

  ngOnInit() {
    if (this.route && this.route.data) {
      this.getData();
    }
  }

  async getData() {
    const loading = await this.loadingCtrl.create({
      message: 'Espere un momento...',
      duration: 1000
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

  diarioDietetico() {
    this.router.navigate(['/crear-diario-dietetico']);
  }
}
