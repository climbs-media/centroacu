import { Component, OnInit } from '@angular/core';
import { HistorialClinicoService } from 'src/app/services/historial-clinico.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { WebView } from '@ionic-native/ionic-webview/ngx';

@Component({
  selector: 'app-crear-peso',
  templateUrl: './crear-peso.page.html',
  styleUrls: ['./crear-peso.page.scss'],
})
export class CrearPesoPage implements OnInit {

  public  tituhead: String = 'Crear Diario Dietetico';
  validations_form: FormGroup;
  image: any;

  constructor(

    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public router: Router,
    private formBuilder: FormBuilder,
    private firebaseService: HistorialClinicoService,
    private webview: WebView
  ) { }

  ngOnInit() {
    this.resetFields();
  }

  resetFields() {
    this.image = './assets/imgs/foto_cliente.jpg';
    this.validations_form = this.formBuilder.group({
      fecha: new FormControl('', Validators.required),
      peso: new FormControl('', Validators.required),
      pesoAnterior: new FormControl('', Validators.required),
      pesoPerdido: new FormControl('', Validators.required),
      pesoObjetivo: new FormControl('', Validators.required),
      estasObjetivo: new FormControl('', Validators.required),
      imc: new FormControl('', Validators.required),
    });
  }

  onSubmit(value) {
    const data = {
      fecha: value.fecha,
      peso: value.peso,
      pesoAnterior: value.pesoAnterior,
      pesoPerdido: value.pesoPerdido,
      pesoObjetivo: value.pesoObjetivo,
      estasObjetivo: value.estasObjetivo,
      imc: value.imc,
    };
    this.firebaseService.crearPeso(data)
      .then(
        res => {
          this.router.navigate(['/mipeso']);
        }
      );
  }

  async presentLoading(loading) {
    return await loading.present();
  }

}


