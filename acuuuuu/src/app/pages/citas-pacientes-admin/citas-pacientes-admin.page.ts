import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { NuevaCitaService } from 'src/app/services/nueva-cita.service';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

@Component({
  selector: 'app-citas-pacientes-admin',
  templateUrl: './citas-pacientes-admin.page.html',
  styleUrls: ['./citas-pacientes-admin.page.scss'],
})
export class CitasPacientesAdminPage implements OnInit {

  public  tituhead: String = 'Citas Pacientes';

  validations_form: FormGroup;
  image: any;
  item: any;
  userId: any;
  load = false;

  constructor(
      private imagePicker: ImagePicker,
      public toastCtrl: ToastController,
      public loadingCtrl: LoadingController,
      private formBuilder: FormBuilder,
      private firebaseService: NuevaCitaService,
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
    })
    this.validations_form = this.formBuilder.group({
      descripcion: new FormControl(this.item.descripcion, Validators.required),
      inicioCita: new FormControl(this.item.inicioCita, Validators.required),
      fecha: new FormControl(this.item.fecha, Validators.required),
      finalCita: new FormControl(this.item.finalCita, Validators.required),
    });
  }

  onSubmit(value) {
    const data = {
      titulo: value.titulo,
        descripcion: value.descripcion,
        inicioCita: value.inicioCita,
        fecha: value.fecha,
        finalCita: value.finalCita,
      userId: this.userId,
    };
    this.firebaseService.actualizarCita(this.item.id, data)
        .then(
            res => {
              this.router.navigate(['/home-admin']);
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
            this.firebaseService.borrarCita(this.item.id)
                .then(
                    res => {
                      this.router.navigate(['/home-admin']);
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
