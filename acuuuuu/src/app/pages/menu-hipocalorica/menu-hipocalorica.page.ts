import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MenuHipocaloricoService } from 'src/app/services/menu-hipocalorico.service';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { WebView } from '@ionic-native/ionic-webview/ngx';

@Component({
  selector: 'app-menu-hipocalorica',
  templateUrl: './menu-hipocalorica.page.html',
  styleUrls: ['./menu-hipocalorica.page.scss'],
})
export class MenuHipocaloricaPage implements OnInit {

  public  tituhead: String = 'Crear Dieta Hipocalórica';
  validations_form: FormGroup;
  image: any;

  constructor(
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public router: Router,
    private formBuilder: FormBuilder,
    private firebaseService: MenuHipocaloricoService,
    private webview: WebView
  ) { }

  ngOnInit() {
    this.resetFields();
  }

  resetFields() {
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
    this.firebaseService.crearMenuHipocalorico(data)
      .then(
        res => {
          this.router.navigate(['/dietas-hipocaloricas']);
        }
      );
  }

  async presentLoading(loading) {
    return await loading.present();
  }


}
