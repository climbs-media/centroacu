import { Component, OnInit } from '@angular/core';
import { DiarioDieteticoService } from 'src/app/services/diario-dietetico.service';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { WebView } from '@ionic-native/ionic-webview/ngx';

@Component({
  selector: 'app-crear-diario-dietetico',
  templateUrl: './crear-diario-dietetico.page.html',
  styleUrls: ['./crear-diario-dietetico.page.scss'],
})
export class CrearDiarioDieteticoPage implements OnInit {

  public  tituhead: String = 'Crear Diario';
  validations_form: FormGroup;
  image: any;

  constructor(

    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public router: Router,
    private formBuilder: FormBuilder,
    private firebaseService: DiarioDieteticoService,
    private webview: WebView
  ) { }

  ngOnInit() {
    this.resetFields();
  }

  resetFields() {
    this.image = './assets/imgs/foto_cliente.jpg';
    this.validations_form = this.formBuilder.group({
      desayuno: new FormControl('', Validators.required),
      fecha: new FormControl('', Validators.required),
      mediaManana: new FormControl('', Validators.required),
      comida: new FormControl('', Validators.required),
      mediaTarde: new FormControl('', Validators.required),
      cena: new FormControl('', Validators.required),
    });
  }

  onSubmit(value) {
    const data = {
      desayuno: value.desayuno,
      fecha: value.fecha,
        mediaManana: value.mediaManana,
        comida: value.comida,
        mediaTarde: value.mediaTarde,
        cena: value.cena,
    };
    this.firebaseService.crearDiarioDietetico(data)
      .then(
        res => {
          this.router.navigate(['/diario-dietetico']);
        }
      );
  }

  async presentLoading(loading) {
    return await loading.present();
  }

}

