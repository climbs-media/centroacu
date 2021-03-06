import { Component, OnInit } from '@angular/core';
import { DiarioDieteticoService } from 'src/app/services/diario-dietetico.service';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalles-historial-dietetico',
  templateUrl: './detalles-historial-dietetico.page.html',
  styleUrls: ['./detalles-historial-dietetico.page.scss'],
})
export class DetallesHistorialDieteticoPage implements OnInit {

  public  tituhead: String = 'Detalles';


  validations_form: FormGroup;
  image: any;
  item: any;
  load: boolean = false;
  userId: any;

  constructor(
    private imagePicker: ImagePicker,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private firebaseService: DiarioDieteticoService,
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
      let data = routeData['data'];
      if (data) {
        this.item = data;
        this.image = this.item.image;
        this.userId = this.item.userId;
      }
    })
    this.validations_form = this.formBuilder.group({
      nombreApellido: new FormControl(this.item.nombreApellido, Validators.required),
      desayuno: new FormControl(this.item.desayuno, Validators.required),
      mediaManana: new FormControl(this.item.mediaManana, Validators.required),
      comida: new FormControl(this.item.comida, Validators.required),
      mediaTarde: new FormControl(this.item.mediaTarde, Validators.required),
      cena: new FormControl(this.item.cena, Validators.required),
      fecha: new FormControl(this.item.fecha, Validators.required),

    });
  }

  onSubmit(value){
    let data = {
      desayuno: value.desayuno,
        nombreApellido: value.nombreApellido,
        fecha: value.fecha,
        mediaManana: value.mediaManana,
        comida: value.comida,
        mediaTarde: value.mediaTarde,
        cena: value.cena,
      userId: this.userId,
    }
    this.firebaseService.actualizarDiarioDietetico(this.item.id,data)
      .then(
        res => {
          this.router.navigate(["/lista-historial-dietetico"]);
        }
      )
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
            this.firebaseService.borrarDiarioDietetico(this.item.id)
              .then(
                res => {
                  this.router.navigate(["/lista-historial-dietetico"]);
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
        if(result == false){
          // no callbacks required as this opens a popup which returns async
          this.imagePicker.requestReadPermission();
        }
        else if(result == true){
          this.imagePicker.getPictures({
            maximumImagesCount: 1
          }).then(
            (results) => {
              for (var i = 0; i < results.length; i++) {
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
    // let image_to_convert = 'http://localhost:8080/_file_' + image;
    let image_src = this.webview.convertFileSrc(image);
    let randomId = Math.random().toString(36).substr(2, 5);

    //uploads img to firebase storage
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
