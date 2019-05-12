import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { ActivatedRoute, Router } from '@angular/router';
import {HistorialClinicoService} from '../../services/historial-clinico.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
  public  tituhead: String = 'Editar Perfil';

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
      private firebaseService: HistorialClinicoService,
      private webview: WebView,
      private alertCtrl: AlertController,
      private route: ActivatedRoute,
      private router: Router
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.route.data.subscribe(routeData => {
      const data = routeData['data'];
      if (data) {
        this.item = data;
        this.image = this.item.image;
        this.userId = this.item.userId;
      }
    })
    this.validations_form = this.formBuilder.group({
      nombreApellido: new FormControl(this.item.nombreApellido, Validators.required),
      fechaNacimiento: new FormControl(this.item.fechaNacimiento, Validators.required),
      ciudad: new FormControl(this.item.ciudad, Validators.required),
      correo: new FormControl(this.item.correo, Validators.required),
      numeroHistorial: new FormControl(this.item.numeroHistorial, Validators.required),
      fecha: new FormControl(this.item.fecha, Validators.required),
      edad: new FormControl(this.item.edad, Validators.required),
      telefono: new FormControl(this.item.telefono, Validators.required),
      profesion: new FormControl(this.item.profesion, Validators.required),
      motivoConsulta: new FormControl(this.item.motivoConsulta, Validators.required),
      interNombre: new FormControl(this.item.interNombre, Validators.required),
      enfermedades: new FormControl(this.item.enfermedades, Validators.required),
      familiares: new FormControl(this.item.familiares, Validators.required),
      peso: new FormControl(this.item.peso, Validators.required),
      bono: new FormControl(this.item.bono, Validators.required),
      altura: new FormControl(this.item.altura, Validators.required),
      referencia: new FormControl(this.item.referencia, Validators.required),
      imc: new FormControl(this.item.imc, Validators.required), 
    });
  }

  onSubmit(value) {
    const data = {
      nombreApellido: value.nombreApellido,
      fechaNacimiento: value.fechaNacimiento,
      ciudad: value.ciudad,
      correo: value.correo,
      numeroHistorial: value.numeroHistorial,
      fecha: value.fecha,
      edad: value.edad,
      telefono: value.telefono,
      profesion: value.profesion,
      motivoConsulta: value.motivoConsulta,
      interNombre: value.interNombre,
      enfermedades: value.enfermedades,
      familiares: value.familiares,
      peso: value.peso,
      bono: value.bono,
      altura: value.altura,
      referencia: value.referencia,
      imc: value.imc,
      userId: this.userId,
    };
    this.firebaseService.actualizarHistorialClinico(this.item.id, data)
        .then(
            res => {
              this.router.navigate(['/cliente-perfil']);
            }
        );
  }

  async delete() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar',
      message: 'Quieres Eliminarlo ' + this.item.nombreApellido + '?',
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
                      this.router.navigate(['/cliente-perfil']);
                    },
                    err => console.log(err)
                );
          }
        }
      ]
    });
    await alert.present();
  }

  openImagePicker() {
    this.imagePicker.hasReadPermission()
        .then((result) => {
          if (result === false) {
            // no callbacks required as this opens a popup which returns async
            this.imagePicker.requestReadPermission();
          } else if (result === true) {
            this.imagePicker.getPictures({
              maximumImagesCount: 1
            }).then(
                (results) => {
                  for (let i = 0; i < results.length; i++) {
                    this.uploadImageToFirebase(results[i]);
                  }
                }, (err) => console.log(err)
            );
          }
        }, (err) => {
          console.log(err);
        });
  }

  async uploadImageToFirebase(image) {
    const loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    const toast = await this.toastCtrl.create({
      message: 'Imagen subida',
      duration: 1000
    });
    this.presentLoading(loading);
    // let image_to_convert = 'http://localhost:8080/_file_' + image;
    const image_src = this.webview.convertFileSrc(image);
    const randomId = Math.random().toString(36).substr(2, 5);

    // uploads img to firebase storage
    this.firebaseService.uploadImage(image_src, randomId)
        .then(photoURL => {
          this.image = photoURL;
          loading.dismiss();
          toast.present();
        }, err =>{
          console.log(err);
        });
  }

  async presentLoading(loading) {
    return await loading.present();
  }

}
