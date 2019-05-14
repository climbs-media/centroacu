import { Component, OnInit } from '@angular/core';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { ActivatedRoute, Router } from '@angular/router';
import { NuevaCitaService } from 'src/app/services/nueva-cita.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-detalles-citas',
  templateUrl: './detalles-citas.page.html',
  styleUrls: ['./detalles-citas.page.scss'],
})
export class DetallesCitasPage implements OnInit {

  public  tituhead: String = 'Detalles';
  validations_form: FormGroup;
  image: any;
  item: any;
  load: boolean = false;
  isAdmin: any = null;
  userUid: string = null;

  constructor(
    private imagePicker: ImagePicker,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private firebaseService: NuevaCitaService,
    private webview: WebView,
    private alertCtrl: AlertController,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.getData();
    this.getCurrentUser();
  }

  getData(){
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.item = data;
        this.image = this.item.image;
      }
    })
    this.validations_form = this.formBuilder.group({
      titulo: new FormControl(this.item.titulo, Validators.required),
      descripcion: new FormControl(this.item.descripcion, Validators.required),
      inicioCita: new FormControl(this.item.inicioCita, Validators.required),
      finalCita: new FormControl(this.item.finalCita, Validators.required),
    });
  }

  onSubmit(value){
    let data = {
      titulo: value.titulo,
      descripcion: value.descripcion,
      inicioCita: value.inicioCita,
      fecha: value.fecha,
      finalCita: value.finalCita,
    }
    this.firebaseService.actualizarCita(this.item.id,data)
      .then(
        res => {
          this.router.navigate(["/lista-citas"]);
        }
      )
  }

  async delete() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar',
      message: 'Quieres Eliminarlo ' + this.item.titulo + '?',
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
                  this.router.navigate(["/lista-citas"]);
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

  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.userUid = auth.uid;
        this.authService.isUserAdmin(this.userUid).subscribe(userRole => {
          this.isAdmin = userRole && Object.assign({}, userRole.roles).hasOwnProperty('admin') || false;
          // this.isAdmin = true;
        });
      }
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

