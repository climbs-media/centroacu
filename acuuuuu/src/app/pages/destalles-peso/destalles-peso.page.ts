import { Component, OnInit } from '@angular/core';
import { HistorialClinicoService } from 'src/app/services/historial-clinico.service';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-destalles-peso',
  templateUrl: './destalles-peso.page.html',
  styleUrls: ['./destalles-peso.page.scss'],
})
export class DestallesPesoPage implements OnInit {


  public  tituhead: String = 'Editar Perfil';

  validations_form: FormGroup;
  image: any;
  item: any;
  userId: any;
  load = false;
  isAdmin: any = null;
  isPasi: any = null;
  userUid: string = null;

  constructor(
      private imagePicker: ImagePicker,
      public toastCtrl: ToastController,
      public loadingCtrl: LoadingController,
      private formBuilder: FormBuilder,
      private firebaseService: HistorialClinicoService,
      private webview: WebView,
      private alertCtrl: AlertController,
      private route: ActivatedRoute,
      private router: Router,
      private authService: AuthService,

  ) { }

  ngOnInit() {
    this.getData();
    this.getCurrentUser();
    this.getCurrentUser2();
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
      nombreApellido: new FormControl(this.item.nombreApellido, ),
      fechaNacimiento: new FormControl(this.item.fechaNacimiento, ),
      ciudad: new FormControl(this.item.ciudad, ),
      correo: new FormControl(this.item.correo, ),
      numeroHistorial: new FormControl(this.item.numeroHistorial, ),
      fecha: new FormControl(this.item.fecha, Validators.required),
      edad: new FormControl(this.item.edad, ),
      telefono: new FormControl(this.item.telefono, ),
      profesion: new FormControl(this.item.profesion, ),
      motivoConsulta: new FormControl(this.item.motivoConsulta, ),
      interNombre: new FormControl(this.item.interNombre, ),
      enfermedades: new FormControl(this.item.enfermedades, ),
      familiares: new FormControl(this.item.familiares, ),
      peso: new FormControl(this.item.peso, Validators.required),
      pesoAnterior: new FormControl(this.item.pesoAnterior, Validators.required),
      pesoPerdido: new FormControl(this.item.pesoPerdido, Validators.required),
      pesoObjetivo: new FormControl(this.item.pesoObjetivo, Validators.required),
      estasObjetivo: new FormControl(this.item.estasObjetivo, Validators.required),
      bono: new FormControl(this.item.bono, ),
      altura: new FormControl(this.item.altura, Validators.required),
      referencia: new FormControl(this.item.referencia, ),
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
      pesoAnterior: value.pesoAnterior,
      pesoObjetivo: value.pesoObjetivo,
      pesoPerdido: value.pesoPerdido,
      estasObjetivo: value.estasObjetivo,
      bono: value.bono,
      altura: value.altura,
      referencia: value.referencia,
      imc: value.imc, 
      userId: this.userId,
    };
    this.firebaseService.actualizarHistorialClinico(this.item.id, data)
        .then(
            res => {
              this.router.navigate(['/lista-paciente-peso']);
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
            this.firebaseService.borrarHistorialClinico(this.item.id)
                .then(
                    res => {
                      this.router.navigate(['/lista-paciente-peso']);
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

  getCurrentUser2() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.userUid = auth.uid;
        this.authService.isUserPacientes(this.userUid).subscribe(userRole => {
          this.isPasi = userRole && Object.assign({}, userRole.roles).hasOwnProperty('pacientes') || false;
          // this.isAdmin = true;
        });
      }
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

