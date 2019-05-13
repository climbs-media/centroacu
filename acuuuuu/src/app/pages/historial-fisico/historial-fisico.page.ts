import { Component, OnInit } from '@angular/core';
import * as firebase from '../../services/firebase.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { HistorialFisicoService } from 'src/app/services/historial-fisico.service';

@Component({
  selector: 'app-historial-fisico',
  templateUrl: './historial-fisico.page.html',
  styleUrls: ['./historial-fisico.page.scss'],
})
export class HistorialFisicoPage implements OnInit {

  public  tituhead: String = 'Historial Físico';
  validations_form: FormGroup;
  image: any;
  items: Array<any>;

  constructor(
    private imagePicker: ImagePicker,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public router: Router,
    private formBuilder: FormBuilder,
    private firebaseService: HistorialFisicoService,
    private webview: WebView,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.resetFields();
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

  resetFields() {
    this.image = './assets/imgs/foto_cliente.jpg';
    this.validations_form = this.formBuilder.group({
      nombre: new FormControl('', Validators.required),
      fecha: new FormControl('', Validators.required),
    });
  }

  onSubmit(value) {
    const data = {
      nombre: value.nombre,
      fecha: value.fecha,
      image: this.image
    };
    this.firebaseService.crearHistorialFisico(data)
      .then(
        res => {
          this.router.navigate(['/historial-fisico']);
        }
      );
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
      message: 'Cargando...'
    });
    const toast = await this.toastCtrl.create({
      message: 'Imagen Cargada',
      duration: 1000
    });
    this.presentLoading(loading);
    const image_src = this.webview.convertFileSrc(image);
    const randomId = Math.random().toString(36).substr(2, 5);

    // uploads img to firebase storage
    this.firebaseService.uploadImage(image_src, randomId)
      .then(photoURL => {
        this.image = photoURL;
        loading.dismiss();
        toast.present();
      }, err => {
        console.log(err);
      });
  }

  async presentLoading(loading) {
    return await loading.present();
  }

  goAgregar(){
    this.router.navigate(['/crear-historial-fisico'])
  }

}
