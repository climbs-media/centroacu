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
      fechaConsulta: new FormControl('', Validators.required),
      menu: new FormControl('', Validators.required),
      pesoActual: new FormControl('', Validators.required),
      pesoPerdido: new FormControl('', Validators.required),
      semanas: new FormControl('', Validators.required),
    });
  }

  onSubmit(value) {
    const data = {
      fechaConsulta: value.fechaConsulta,
        fechaUltimoPeso: value.fechaUltimoPeso,
        menu: value.menu,
        pesoActual: value.pesoActual,
        pesoPerdido: value.pesoPerdido,
        semanas: value.semanas,
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

