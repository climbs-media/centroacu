import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AnadirEjercicioService } from 'src/app/services/añadir-ejercicio.service';
import { WebView } from '@ionic-native/ionic-webview/ngx';


@Component({
  selector: 'app-diario-ejercicio',
  templateUrl: './diario-ejercicio.page.html',
  styleUrls: ['./diario-ejercicio.page.scss'],
})
export class DiarioEjercicioPage implements OnInit {

  
  validations_form: FormGroup;
  image: any;

  event = {
    titulo: '',
    descripcion: '',
    horaInicio: '',
    horaFinal: '',
    allDay : false
  };
  minDate = new Date().toISOString();

  eventSource = [];

  calendar = { 
    mode: 'week',
    currentDate: new Date(),
  }

  viewTitle = '';

  @ViewChild(CalendarComponent) myCal: CalendarComponent;


  constructor(
    private alertCtrl: AlertController,
    @Inject(LOCALE_ID) private locale: string,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public router: Router,
    private formBuilder: FormBuilder,
    private firebaseService: AnadirEjercicioService,
  ) { }

  ngOnInit() {
    this.resetFields();
    this.resetEvent();
  }

  resetFields() {
    this.validations_form = this.formBuilder.group({
      titulo: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      horaInicio: new FormControl('', Validators.required),
      horaFinal: new FormControl('', Validators.required),
      fecha: new FormControl('', Validators.required),
    });
  }

  onSubmit(value) {
    const data = {
      titulo: value.titulo,
      descripcion: value.descripcion,
      horaInicio: value.horaInicio,
      horaFinal: value.horaFinal,
      fecha: value.fecha,
    };
    this.firebaseService.crearAnadirEjercicio(data)
      .then(
        res => {
          this.router.navigate(['/home-user']);
        }
      );
  }

  async presentLoading(loading) {
    return await loading.present();
  }



  resetEvent() {
    this.event = {
      titulo : '',
      descripcion: '',
      horaInicio: new Date().toISOString(),
      horaFinal: new Date().toISOString(),
      allDay : false,
    };
    }

    addEvent() {
      const eventCopy = {
        titulo: this.event.titulo,
        horaInicio:  new Date(this.event.horaInicio),
        horaFinal: new Date(this.event.horaFinal),
        allDay: this.event.allDay,
        descripcion: this.event.descripcion
      }

      if (eventCopy.allDay) {
        const start = eventCopy.horaInicio;
        const end = eventCopy.horaFinal;
   
        eventCopy.horaInicio = new Date(Date.UTC(start.getUTCDate(), start.getUTCMonth(), start.getUTCFullYear()));
        eventCopy.horaFinal = new Date(Date.UTC(end.getUTCDate() + 1, end.getUTCMonth(), end.getUTCFullYear()));
      }

      this.eventSource.push(eventCopy);
      this.myCal.loadEvents();
      this.resetEvent();
    }

    next() {
      // tslint:disable-next-line:prefer-const
      var swiper = document.querySelector('.swiper-container')['swiper'];
      swiper.slideNext();
    }
     
    back() {
      // tslint:disable-next-line:prefer-const
      var swiper = document.querySelector('.swiper-container')['swiper'];
      swiper.slidePrev();
    }

    today() {
      this.calendar.currentDate = new Date();
    }


    onViewTitleChanged(titulo) {
      this.viewTitle = titulo;
    }

    async onEventSelected(event) {
      // Use Angular date pipe for conversion
      const start = formatDate(event.horaInicio, 'medium', this.locale);
      const end = formatDate(event.horaFinal, 'medium', this.locale);
     
      const alert = await this.alertCtrl.create({
        header: event.titulo,
        subHeader: event.descripcion,
        message: 'From: ' + start + '<br><br>To: ' + end,
        buttons: ['OK']
      });
      alert.present();
    }




  onCurrentDateChanged(){

  }


  reloadSource(){

  }


  onTimeSelected(ev) {
    const selected = new Date(ev.selectedTime);
    this.event.horaInicio = selected.toISOString();
    selected.setHours(selected.getHours() + 1);
    this.event.horaFinal = (selected.toISOString());
  }




}
