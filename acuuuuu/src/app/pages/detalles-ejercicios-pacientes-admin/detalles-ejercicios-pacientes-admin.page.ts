import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, AlertController, ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AnadirEjercicioService } from 'src/app/services/añadir-ejercicio.service';

@Component({
  selector: 'app-detalles-ejercicios-pacientes-admin',
  templateUrl: './detalles-ejercicios-pacientes-admin.page.html',
  styleUrls: ['./detalles-ejercicios-pacientes-admin.page.scss'],
})
export class DetallesEjerciciosPacientesAdminPage implements OnInit {

  public  tituhead: String = 'Detalles de Ejercicio';
  validations_form: FormGroup;
  image: any;
  item: any;
  isPasi: any = null;
  isAdmin: any = null;
  userUid: string = null;

  constructor(
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private diarioService: AnadirEjercicioService,
    private alertCtrl: AlertController,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.getData();
    this.getCurrentUser2();
  }

  getData() {
    this.route.data.subscribe(routeData => {
      const data = routeData['data'];
      if (data) {
        this.item = data;
      }
    });
    this.validations_form = this.formBuilder.group({
      titulo: new FormControl(this.item.titulo, ),
      descripcion: new FormControl(this.item.descripcion , Validators.required),
      horaInicio: new FormControl(this.item.horaInicio , Validators.required),
      horaFinal: new FormControl(this.item.horaFinal , Validators.required),
      fecha: new FormControl(this.item.fecha , Validators.required),

    });
  }

  onSubmit(value) {
    const data = {
      titulo: value.titulo,
      descripcion: value.descripcion,
      horaInicio: value.horaInicio,
      horaFinal: value.horaFinal,
      fecha: value.fecha,
    };
    this.diarioService.actualizarAnadirEjercicio
    (this.item.id, data)
      .then(
        res => {
          this.router.navigate(['/dietas-proteinas']);
        }
      );
  }

  async delete() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar',
      message: 'Quieres Eliminar Ejercicio' + this.item.titulo + '?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.diarioService.borrarAnadirEjercicio(this.item.id)
              .then(
                res => {
                  this.router.navigate(['/home']);
                },
                err => console.log(err)
              );
          }
        }
      ]
    });
    await alert.present();
  }


  async presentLoading(loading) {
    return await loading.present();
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

}
