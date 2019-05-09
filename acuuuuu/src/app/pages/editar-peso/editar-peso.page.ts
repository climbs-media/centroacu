import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { ActivatedRoute, Router } from '@angular/router';
import {HistorialClinicoService} from '../../services/historial-clinico.service';

@Component({
  selector: 'app-editar-peso',
  templateUrl: './editar-peso.page.html',
  styleUrls: ['./editar-peso.page.scss'],
})
export class EditarPesoPage implements OnInit {

  public  tituhead: String = 'Editar Peso';

  validations_form: FormGroup;
  image: any;
  item: any;
  userId: any;
  load = false;

  constructor(
      public toastCtrl: ToastController,
      public loadingCtrl: LoadingController,
      private formBuilder: FormBuilder,
      private firebaseService: HistorialClinicoService,
      private webview: WebView,
      private alertCtrl: AlertController,
      private route: ActivatedRoute,
      private router: Router
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.route.data.subscribe(routeData => {
      const data = routeData['data'];
      if (data) {
        this.item = data;
      //  this.image = this.item.image;
        this.userId = this.item.userId;
      }
    });
    this.validations_form = this.formBuilder.group({
      nombreApellido: new FormControl(this.item.nombreApellido, Validators.required),
      imc: new FormControl(this.item.imc, Validators.required),
      peso: new FormControl('', Validators.required),
      fechaConsulta: new FormControl('', Validators.required),
    });
  }

  onSubmit(value) {
    const data = {
      nombreApellido: value.nombreApellido,
      fechaConsulta: value.fechaConsulta,
      peso: value.peso,
      imc: value.imc,
      userId: this.userId,
    };
    this.firebaseService.actualizarPeso(this.item.id, data)
        .then(
            res => {
              this.router.navigate(['/mipeso']);
            }
        );
  }

  async delete() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar',
      message: 'Quieres Eliminarlo ' + this.item.title + '?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        },
        {
          text: 'Yes',
          handler: () => {
            this.firebaseService.borrarHistorialClinico(this.item.id)
                .then(
                    res => {
                      this.router.navigate(['/mipeso']);
                    },
                    err => console.log(err)
                );
          }
        }
      ]
    });
    await alert.present();
  }

  async presentLoading(loading) {
    return await loading.present();
  }

}
