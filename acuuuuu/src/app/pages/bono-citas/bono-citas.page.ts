import { Component, OnInit } from '@angular/core';

import { ModalController, ToastController, LoadingController } from '@ionic/angular';
import { BonosAcreditadosPage } from '../bonos-acreditados/bonos-acreditados.page';
import { BonoCitasService } from 'src/app/services/bono-citas.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';

@Component({
  selector: 'app-bono-citas',
  templateUrl: './bono-citas.page.html',
  styleUrls: ['./bono-citas.page.scss'],
})
export class BonoCitasPage implements OnInit {


  validations_form: FormGroup;
  image: any;

  constructor(
    private modalController: ModalController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public router: Router,
    private formBuilder: FormBuilder,
    private bonoService: BonoCitasService,
    private imagePicker: ImagePicker,
    private webview: WebView,
  ) { }

  ngOnInit() {
    this.resetFields();
  }

  resetFields() {
    this.image = './assets/imgs/foto_cliente';
    this.validations_form = this.formBuilder.group({
      nombreCliente: new FormControl('', ),
      bonoOcho: new FormControl('', ),
      bonoCuatro: new FormControl('', ),
      bonoManual: new FormControl('', ),
      fechaBono: new FormControl('', Validators.required),
      bonoCitas: new FormControl('', ),
      citasRestantes: new FormControl('', Validators.required),
    });
  }


  onSubmit(value) {
    const data = {
      nombreCliente: value.nombreCliente,
      bonoOcho: value.bonoOcho,
      bonoCuatro: value.bonoCuatro,
      bonoManual: value.bonoManual,
      fechaBono: value.fechaBono,
      bonoCitas: value.bonoCitas,
      citasRestantes: value.citasRestantes,
      image: this.image
    }
    this.bonoService.crearBonoCita(data)
      .then(
        res => {
          this.router.navigate(['/cliente-perfil']);
        }
      )
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

  async uploadImageToFirebase(image){
    const loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    const toast = await this.toastCtrl.create({
      message: 'Image was updated successfully',
      duration: 3000
    });
    this.presentLoading(loading);
    const image_src = this.webview.convertFileSrc(image);
    const randomId = Math.random().toString(36).substr(2, 5);

    // uploads img to firebase storage
    this.bonoService.uploadImage(image_src, randomId)
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


  Acreditados() {
    this.modalController.create({
      component: BonosAcreditadosPage,
      componentProps: {
  
      }
    }).then(modal => {
      modal.present();
    });
  }

}
