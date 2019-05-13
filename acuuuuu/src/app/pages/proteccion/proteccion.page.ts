import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ProteccionService } from 'src/app/services/proteccion.service';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-proteccion',
  templateUrl: './proteccion.page.html',
  styleUrls: ['./proteccion.page.scss'],
})
export class ProteccionPage implements OnInit {

  signature = '';
  isDrawing = false;
 
  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  private signaturePadOptions: Object = { // Check out https://github.com/szimek/signature_pad
    'minWidth': 2,
    'canvasWidth': 400,
    'canvasHeight': 200,
    'backgroundColor': '#f6fbff',
    'penColor': '#666a73'
  };

  public  tituhead: string = 'Centro ACU 10';

  validations_form: FormGroup;
  image: any;

  constructor(
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public router: Router,
    private formBuilder: FormBuilder,
    private proteccionService: ProteccionService,
    public navController: NavController, 
    public storage: Storage, 
  ) { }

  ngOnInit() {
    this.resetFields();
  }

  resetFields() {
    this.validations_form = this.formBuilder.group({
      check: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      fecha: new FormControl('', Validators.required),
      identidad: new FormControl ('', Validators.required)
    });
  }


  onSubmit(value) {
    const data = {
        nombre: value.nombre,
        fecha: value.fecha,
        identidad: value.identidad,
    };
    this.proteccionService.crearProteccion(data)
      .then(
        res => {
          this.router.navigate(['/registro']);
        }
      );
  }

  async presentLoading(loading) {
    return await loading.present();
  }

  /*tabla firma*/

  ionViewDidEnter() {
    this.signaturePad.clear()
    this.storage.get('savedSignature').then((data) => {
      this.signature = data;
    });
  }
 
  drawComplete() {
    this.isDrawing = false;
  }
 
  drawStart() {
    this.isDrawing = true;
  }
 
  async savePad() {
    this.signature = this.signaturePad.toDataURL();
    this.storage.set('savedSignature', this.signature);
    this.signaturePad.clear();
    let toast = await this.toastCtrl.create({
      message: 'Nueva Firma Guardada.',
      duration: 1000
    });
    toast.present();
  }

  clearPad() {
    this.signaturePad.clear();
  }
}

