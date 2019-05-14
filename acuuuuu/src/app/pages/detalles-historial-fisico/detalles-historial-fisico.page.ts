import { Component, OnInit } from '@angular/core';
import { HistorialFisicoService } from 'src/app/services/historial-fisico.service';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalles-historial-fisico',
  templateUrl: './detalles-historial-fisico.page.html',
  styleUrls: ['./detalles-historial-fisico.page.scss'],
})
export class DetallesHistorialFisicoPage implements OnInit {

  validations_form: FormGroup;
  image: any;
  item: any;
  load = false;

  constructor(
    private imagePicker: ImagePicker,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private firebaseService: HistorialFisicoService,
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
      }
    })
    this.validations_form = this.formBuilder.group({
      nombre: new FormControl(this.item.nombre, Validators.required),
      fecha: new FormControl(this.item.fecha, Validators.required),
    });
  }

  onSubmit(value){
    const data = {
      nombre: value.nombre,
      fecha: value.fecha,
      image: this.image
    }
    this.firebaseService.uploadImage(this.item.id, data)
      .then(
        res => {
          this.router.navigate(['/admin-perfil-res']);
        }
      )
  }

  async delete() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar',
      message: 'Quieres Eliminarlo ' + this.item.nombre + '?',
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
            this.firebaseService.borrarHistorialFisico(this.item.id)
              .then(
                res => {
                  this.router.navigate(['/historial-fisico']);
                },
                err => console.log(err)
              )
          }
        }
      ]
    });
    await alert.present();
  }

  openImagePicker(){
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

  async uploadImageToFirebase(image){
    const loading = await this.loadingCtrl.create({
      message: 'Espere por favor...'
    });
    const toast = await this.toastCtrl.create({
      message: 'Imagen cargada',
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
      })
  }

  async presentLoading(loading) {
    return await loading.present();
  }

}