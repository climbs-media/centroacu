import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import {AlertController, LoadingController, ToastController} from '@ionic/angular';
import { formatDate } from '@angular/common';
import {ImagePicker} from '@ionic-native/image-picker/ngx';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HistorialClinicoService} from '../../services/historial-clinico.service';
import {WebView} from '@ionic-native/ionic-webview/ngx';
import {NuevaCitaService} from '../../services/nueva-cita.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-nueva-cita',
  templateUrl: './nueva-cita.page.html',
  styleUrls: ['./nueva-cita.page.scss'],
})
export class NuevaCitaPage implements OnInit {

  public  tituhead: String = 'Nueva Cita';
  validations_form: FormGroup;
  image: any;
  items: Array<any>;

  event = {
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    allDay : true,
  };
  minDate = new Date().toISOString();

  eventSource = [];

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  viewTitle = '';

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor( private alertCtrl: AlertController,
              @Inject(LOCALE_ID) private locale: string,
              private imagePicker: ImagePicker,
              public toastCtrl: ToastController,
              public loadingCtrl: LoadingController,
              public router: Router,
              private formBuilder: FormBuilder,
              private firebaseService: NuevaCitaService,
              public alertController: AlertController,
              private route: ActivatedRoute,
              private authService: AuthService,
  private webview: WebView) { }

  ngOnInit() {
    this.resetEvent();
    this.resetFields();
    if (this.route && this.route.data) {
      this.getData();
    }
  }

  async getData() {
    const loading = await this.loadingCtrl.create({
      message: 'Espere un momento...',
      duration: 1000
    });
    this.presentLoading(loading);

    this.route.data.subscribe(routeData => {
      routeData['data'].subscribe(data => {
        loading.dismiss();
        this.items = data;
      });
    });
  }

  resetFields() {
    this.validations_form = this.formBuilder.group({
      titulo: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      inicioCita: new FormControl('', Validators.required),
      fecha: new FormControl('', Validators.required),
      finalCita: new FormControl('', Validators.required),
    });
  }

  onSubmit(value) {
    const data = {
      titulo: value.titulo,
      descripcion: value.descripcion,
      fecha: value.fecha,
      inicioCita: value.inicioCita,
      finalCita: value.finalCita,
    };
    this.firebaseService.crearNuevaCita(data)
        .then(
            res => {
              this.router.navigate(['/nueva-cita']);
            }
        );
  }

  async presentLoading(loading) {
    return await loading.present();
  }

  resetEvent() {
    this.event = {
      title: '',
      desc: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      allDay : false,
    };
    }

    addEvent() {
      const eventCopy = {
        title: this.event.title,
        startTime:  new Date(this.event.startTime),
        endTime: new Date(this.event.endTime),
        allDay: this.event.allDay,
        desc: this.event.desc
      };

      if (eventCopy.allDay) {
        const start = eventCopy.startTime;
        const end = eventCopy.endTime;
        eventCopy.startTime = new Date(Date.UTC(start.getUTCDate(), start.getUTCMonth(), start.getUTCFullYear()));
        eventCopy.endTime = new Date(Date.UTC(end.getUTCDate() + 1, end.getUTCMonth(), end.getUTCFullYear()));
      }

      this.eventSource.push(eventCopy);
      this.myCal.loadEvents();
      this.resetEvent();
    }

    next() {
      const swiper = document.querySelector('.swiper-container')['swiper'];
      swiper.slideNext();
    }

    back() {
      const swiper = document.querySelector('.swiper-container')['swiper'];
      swiper.slidePrev();
    }

    today() {
      this.calendar.currentDate = new Date();
    }


    onViewTitleChanged(title) {
      this.viewTitle = title;
    }

    async onEventSelected(event) {
      // Use Angular date pipe for conversion
      const start = formatDate(event.startTime, 'medium', this.locale);
      const end = formatDate(event.endTime, 'medium', this.locale);
      const alert = await this.alertCtrl.create({
        header: event.title,
        subHeader: event.desc,
        message: 'From: ' + start + '<br><br>To: ' + end,
        buttons: ['OK']
      });
      alert.present();
    }




  onCurrentDateChanged() {

  }


  reloadSource() {

  }


  onTimeSelected(ev) {
    const selected = new Date(ev.selectedTime);
    this.event.startTime = selected.toISOString().slice(0, 10);
    selected.setHours(selected.getHours() + 1);
    this.event.endTime = (selected.toISOString().slice(0, 10));
  }
  
  onLogout() {
    this.authService.doLogout()
      .then(res => {
        this.router.navigate(['/login-admin']);
      }, err => {
        console.log(err);
      });
  }


}
