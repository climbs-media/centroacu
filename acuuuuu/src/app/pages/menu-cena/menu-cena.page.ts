import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { MenuCenasService } from 'src/app/services/menu-cenas.service';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

@Component({
  selector: 'app-menu-cena',
  templateUrl: './menu-cena.page.html',
  styleUrls: ['./menu-cena.page.scss'],
})
export class MenuCenaPage implements OnInit {

  public  tituhead: String = 'Crear Dieta Cena';
  validations_form: FormGroup;
  image: any;

  constructor(
    private imagePicker: ImagePicker,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public router: Router,
    private formBuilder: FormBuilder,
    private firebaseService: MenuCenasService,
    private webview: WebView
  ) { }

  ngOnInit() {
    this.resetFields();
  }

  resetFields() {
    this.image = './assets/imgs/foto_cliente.jpg';
    this.validations_form = this.formBuilder.group({
      nombreMenu: new FormControl('', Validators.required),
      numeroMenu: new FormControl('', Validators.required),
      semanas: new FormControl('', Validators.required),
    });
  }

  /*

   resetFields() {
    this.image = './assets/imgs/foto_cliente.jpg';
    this.validations_form = this.formBuilder.group({
      nombreMenu: new FormControl('', Validators.required),
      desayuno: new FormControl('', Validators.required),
      desayunoDos: new FormControl('', Validators.required),
      comidaLunes: new FormControl('', Validators.required),
      cenaLunes: new FormControl('', Validators.required),
      comidaMartes: new FormControl('', Validators.required),
      cenaMartes: new FormControl('', Validators.required),
      comidaMiercoles: new FormControl('', Validators.required),
      cenaMiercoles: new FormControl('', Validators.required),
      comidaJueves: new FormControl('', Validators.required),
      cenaJueves: new FormControl('', Validators.required),
      comidaViernes: new FormControl('', Validators.required),
      cenaViernes: new FormControl('', Validators.required),
      comidaSabado: new FormControl('', Validators.required),
      cenaSabado: new FormControl('', Validators.required),
      comidaDomingo: new FormControl('', Validators.required),
      cenaDomingo: new FormControl('', Validators.required),
    });


     onSubmit(value) {
    const data = {
      nombreMenu: value.nombreMenu,
      desayuno: value.desayuno,
      desayunoDos: value.desayunoDos,
      comidaLunes: value.comidaLunes,
      cenaLunes: value.cenaLunes,
      comidaMartes: value.comidaMartes,
      cenaMartes: value.cenaMartes,
      comidaMiercoles: value.comidaMiercoles,
      cenaMiercoles: value.cenaMiercoles,
      comidaJueves: value.comidaJueves,
      cenaJueves: value.cenaJueves,
      comidaViernes: value.comidaViernes,
      cenaViernes: value.cenaViernes,
      comidaSabado: value.comidaSabado,
      cenaSabado: value.cenaSabado,
      comidaDomingo: value.comidaDomingo,
      cenaDomingo: value.cenaDomingo,
      image: this.image
    };
  }*/

  onSubmit(value) {
    const data = {
      nombreMenu: value.nombreMenu,
      numeroMenu: value.numeroMenu,
      semanas: value.semanas,
      image: this.image
    };
    this.firebaseService.crearMenuCena(data)
      .then(
        res => {
          this.router.navigate(['/dietas-hipocaloricas']);
        }
      );
  }


  async presentLoading(loading) {
    return await loading.present();
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


}