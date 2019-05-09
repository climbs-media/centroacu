import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu-proteina',
  templateUrl: './menu-proteina.page.html',
  styleUrls: ['./menu-proteina.page.scss'],
})
export class MenuProteinaPage implements OnInit {

  public  tituhead: String = 'Crear Dieta Proteína';

  validations_form: FormGroup;
  image: any;

  constructor(
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public router: Router,
    private formBuilder: FormBuilder,
    private firebaseService: MenuService,
    private webview: WebView
  ) { }

  ngOnInit() {
    this.resetFields();
  }

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
  }

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
    };
    this.firebaseService.crearMenuProteina(data)
      .then(
        res => {
          this.router.navigate(['/home-admin']);
        }
      );
  }

  async presentLoading(loading) {
    return await loading.present();
  }

}
