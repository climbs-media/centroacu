import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { MenuCenasService } from 'src/app/services/menu-cenas.service';

@Component({
  selector: 'app-menu-cena',
  templateUrl: './menu-cena.page.html',
  styleUrls: ['./menu-cena.page.scss'],
})
export class MenuCenaPage implements OnInit {

  public  tituhead: String = 'Crear Dieta Hipocalórica';
  validations_form: FormGroup;
  image: any;

  constructor(
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
      cenaLunes: value.cenaLunes,
      cenaMartes: value.cenaMartes,
      cenaMiercoles: value.cenaMiercoles,
      cenaJueves: value.cenaJueves,
      cenaViernes: value.cenaViernes,
      cenaSabado: value.cenaSabado,
      cenaDomingo: value.cenaDomingo,
    };
    this.firebaseService.crearMenuCena(data)
      .then(
        res => {
          this.router.navigate(['/dietas-cenass']);
        }
      );
  }

  async presentLoading(loading) {
    return await loading.present();
  }

}