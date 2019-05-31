import { Component, OnInit } from '@angular/core';
import { HistorialClinicoService } from 'src/app/services/historial-clinico.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { WebView } from '@ionic-native/ionic-webview/ngx';

@Component({
  selector: 'app-crear-peso-usuario-admin',
  templateUrl: './crear-peso-usuario-admin.page.html',
  styleUrls: ['./crear-peso-usuario-admin.page.scss'],
})
export class CrearPesoUsuarioAdminPage implements OnInit {

  public  tituhead: String = 'Crear Mi peso';
  validations_form: FormGroup;
  image: any;

      /*IMC*/
      peso = 0;
      altura = 0;
      /***/
      //peso perdido//
      ultimoPeso = 0;
      pesoActual= 0;
      /*********** */
      pesoObjetivo= 0;
  
      get bmi() {
        return this.pesoActual / Math.pow(this.altura, 2);
      }
  
    get pesoPerdido() {
      return this.ultimoPeso - Math.pow(this.pesoActual, 1);
    }
  
    get pesoObj(){
      return this.pesoActual - this.pesoObjetivo;
    }

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
          this.router.navigate(['/lista-pacientes-peso-user']);
        }
      );
  }

  async presentLoading(loading) {
    return await loading.present();
  }

}
