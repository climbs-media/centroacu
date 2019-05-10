import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, AlertController, ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { DiarioDieteticoService } from 'src/app/services/diario-dietetico.service';

@Component({
  selector: 'app-detalles-diario',
  templateUrl: './detalles-diario.page.html',
  styleUrls: ['./detalles-diario.page.scss'],
})
export class DetallesDiarioPage implements OnInit {
  public  tituhead: string = 'Detalles de Diario';
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
    private diarioService: DiarioDieteticoService,
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
      nombreApellido: new FormControl(this.item.nombreApellido, ),
      fechaConsulta: new FormControl(this.item.fechaConsulta , Validators.required),
      fechaUltimoPeso: new FormControl(this.item.fechaUltimoPeso , Validators.required),
      menu: new FormControl(this.item.menu , Validators.required),
      pesoActual: new FormControl(this.item.pesoActual , Validators.required),
      pesoPerdido: new FormControl(this.item.pesoPerdido , Validators.required),
      semanas: new FormControl(this.item.semanas , Validators.required),
    });
  }

  onSubmit(value) {
    const data = {
      nombreApellido: value.nombreApellido,
        fechaConsulta: value.fechaConsulta,
        fechaUltimoPeso: value.fechaUltimoPeso,
        menu: value.menu,
        pesoActual: value.pesoActual,
        pesoPerdido: value.pesoPerdido,
        semanas: value.semanas,
    };
    this.diarioService.actualizarDiarioDietetico
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
      message: 'Quieres Eliminar el Menu' + this.item.nombreMenu + '?',
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
            this.diarioService.borrarDiarioDietetico(this.item.id)
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
