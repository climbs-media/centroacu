import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ProteccionService } from 'src/app/services/proteccion.service';

@Component({
  selector: 'app-proteccion',
  templateUrl: './proteccion.page.html',
  styleUrls: ['./proteccion.page.scss'],
})
export class ProteccionPage implements OnInit {


  validations_form: FormGroup;
  image: any;

  constructor(
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public router: Router,
    private formBuilder: FormBuilder,
    private proteccionService: ProteccionService,
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

}
