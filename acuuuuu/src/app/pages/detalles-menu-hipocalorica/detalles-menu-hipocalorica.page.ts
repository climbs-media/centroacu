import { Component, OnInit } from '@angular/core';
import { MenuHipocaloricoService } from 'src/app/services/menu-hipocalorico.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-detalles-menu-hipocalorica',
  templateUrl: './detalles-menu-hipocalorica.page.html',
  styleUrls: ['./detalles-menu-hipocalorica.page.scss'],
})
export class DetallesMenuHipocaloricaPage implements OnInit {

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
    private menuService: MenuHipocaloricoService,
    private alertCtrl: AlertController,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.getData();
    this.getCurrentUser();
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
      nombreMenu: new FormControl(this.item.asunto, ),
      numeroMenu: new FormControl(this.item.numeroMenu , Validators.required),
      semanas: new FormControl(this.item.semanas , Validators.required),
    });
  /*  this.validations_form = this.formBuilder.group({
      nombreMenu: new FormControl(this.item.asunto, ),
      desayuno: new FormControl(this.item.desayuno , Validators.required),
      desayunoDos: new FormControl(this.item.desayunoDos , Validators.required),
      comidaLunes: new FormControl(this.item.comidaLunes , Validators.required),
      cenaLunes: new FormControl(this.item.cenaLunes , Validators.required),
      comidaMartes: new FormControl(this.item.comidaMartes , Validators.required),
      cenaMartes: new FormControl(this.item.cenaMartes , Validators.required),
      comidaMiercoles: new FormControl(this.item.comidaMiercoles , Validators.required),
      cenaMiercoles: new FormControl(this.item.cenaMiercoles , Validators.required),
      comidaJueves: new FormControl(this.item.comidaJueves , Validators.required),
      cenaJueves: new FormControl(this.item.cenaJueves , Validators.required),
      comidaViernes: new FormControl(this.item.comidaViernes , Validators.required),
      cenaViernes: new FormControl(this.item.cenaViernes , Validators.required),
      comidaSabado: new FormControl(this.item.comidaSabado , Validators.required),
      cenaSabado: new FormControl(this.item.cenaSabado , Validators.required),
      comidaDomingo: new FormControl(this.item.comidaDomingo , Validators.required),
      cenaDomingo: new FormControl(this.item.cenaDomingo , Validators.required),
    });*/
  }

  onSubmit(value) {
    const data = {
      nombreMenu: value.nombreMenu,
        numeroMenu: value.numeroMenu,
        semanas: value.semanas,
    };
    this.menuService.actualizarMenuHipocalorico
    (this.item.id, data)
      .then(
        res => {
          this.router.navigate(['/dietas-hipocaloricas']);
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
            this.menuService.borrarMenuHipocalorico(this.item.id)
              .then(
                res => {
                  this.router.navigate(['/dietas-hipocaloricas']);
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
