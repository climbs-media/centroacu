import { Component, OnInit } from '@angular/core';
import * as firebase from '../../services/firebase.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { HistorialClinicoService } from 'src/app/services/historial-clinico.service';

@Component({
  selector: 'app-historial-clinico',
  templateUrl: './historial-clinico.page.html',
  styleUrls: ['./historial-clinico.page.scss'],
})
export class HistorialClinicoPage implements OnInit {

  validations_form: FormGroup;
  image: any;

  constructor(
    private imagePicker: ImagePicker,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public router: Router,
    private formBuilder: FormBuilder,
    private firebaseService: HistorialClinicoService,
    private webview: WebView
  ) { }

  ngOnInit() {
    this.resetFields();
  }

  resetFields() {
    this.image = './assets/imgs/analitica.png';
    this.validations_form = this.formBuilder.group({
      nombreApellido: new FormControl('', Validators.required),
      fechaNacimiento: new FormControl('', Validators.required),
      ciudad: new FormControl('', Validators.required),
      correo: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
      profesion: new FormControl('', Validators.required),
      motivoConsulta: new FormControl('', Validators.required),
      interNombre: new FormControl('', Validators.required),
      enfermedades: new FormControl('', Validators.required),
      familiares: new FormControl('', Validators.required),
      numeroHistorial: new FormControl('', Validators.required),
      peso: new FormControl('', Validators.required),
      altura: new FormControl('', Validators.required),
      referencia: new FormControl('', ),
      edad: new FormControl('', Validators.required),
      fecha: new FormControl('', Validators.required),
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
      altura: value.altura,
      referencia: value.referencia,
      image: this.image
    };
    this.firebaseService.crearHistorialClinico(data)
      .then(
        res => {
          this.router.navigate(['/home-admin']);
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

}
