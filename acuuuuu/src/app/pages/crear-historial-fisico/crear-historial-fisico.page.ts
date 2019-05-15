import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Component, OnInit } from '@angular/core';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HistorialFisicoService } from 'src/app/services/historial-fisico.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-crear-historial-fisico',
  templateUrl: './crear-historial-fisico.page.html',
  styleUrls: ['./crear-historial-fisico.page.scss'],
})
export class CrearHistorialFisicoPage implements OnInit {
  public  tituhead: String = 'Crear Historial Físico';
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
    private camera: Camera
  ) { }

  ngOnInit() {
    this.resetFields();
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

  getPicture(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    }
    this.camera.getPicture( options )
    .then(imageData => {
      this.image = `data:image/jpeg;base64,${imageData}`;
    })
    .catch(error =>{
      console.error( error );
    });
  }

}
