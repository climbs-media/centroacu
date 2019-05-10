import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { WheelSelector } from '@ionic-native/wheel-selector/ngx';
import { PopoverController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mipeso-user',
  templateUrl: './mipeso-user.page.html',
  styleUrls: ['./mipeso-user.page.scss'],
})
export class MipesoUserPage implements OnInit {

  public  tituhead: String = 'Mi Peso';
  items: Array<any>;

  dummyJson = {
    kilos: [
      {description: '40'},
      {description: '41'},
      {description: '42'},
      {description: '43'},
      {description: '44'},
      {description: '45'},
      {description: '46'},
      {description: '47'},
      {description: '48'},
      {description: '49'},
      {description: '50'},
      {description: '51'},
      {description: '52'},
      {description: '53'},
      {description: '54'},
      {description: '55'},
      {description: '56'},
      {description: '57'},
      {description: '58'},
      {description: '59'},
      {description: '60'},
      {description: '61'},
      {description: '62'},
      {description: '63'},
      {description: '64'},
      {description: '65'},
      {description: '66'},
      {description: '67'},
      {description: '68'},
      {description: '69'},
      {description: '70'},
      {description: '71'},
      {description: '72'},
      {description: '73'},
      {description: '74'},
      {description: '75'},
      {description: '76'},
      {description: '77'},
      {description: '78'},
      {description: '79'},
      {description: '80'},
      {description: '81'},
      {description: '82'},
      {description: '83'},
      {description: '84'},
      {description: '85'},
      {description: '86'},
      {description: '87'},
      {description: '88'},
      {description: '89'},
      {description: '90'},
      {description: '91'},
      {description: '92'},
      {description: '93'},
      {description: '94'},
      {description: '95'},
      {description: '96'},
      {description: '97'},
      {description: '98'},
      {description: '99'},
      {description: '100'},

    ],
    gramos: [
      {description: '0' },
      {description: '100'},
      {description: '200'},
      {description: '300'},
      {description: '400'},
      {description: '500'},
      {description: '600'},
      {description: '700'},
      {description: '800'},
      {description: '900'},
    ]
  }

// tslint:disable-next-line: max-line-length
  constructor( private selector: WheelSelector, 
    private toastCtrl: ToastController,
    private http: HttpClient,
    public loadingCtrl: LoadingController,
    private router: Router,
    private route: ActivatedRoute,) { }

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

  editarPeso() {
    this.router.navigate(['/editar-peso'])
  }

  crearPeso() {
    this.router.navigate(['/crear-peso'])
  }

    openPicker() {
      this.selector.show({
        title: 'Añade tu peso Actual',
        items: [
          this.dummyJson.kilos,
          this.dummyJson.gramos
        ],
        positiveButtonText: 'Seleccionar',
        negativeButtonText: 'Ccncelar',
        defaultItems: [ 
          { index: 0, value: this.dummyJson.kilos[4].description },
          { index: 1, value: this.dummyJson.gramos[1].description}
        ]
      }).then(
        async result => {
          let msg = `Felicitaciones ${result[0].description} con ${result[1].description} Gramos`;
          let toast = await this.toastCtrl.create({
            message: msg,
            duration: 4000
          });
          toast.present();
        },
        err => console.log('Error: ', err)
        );
    }
  }

  


