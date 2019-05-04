import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import {AlertController, LoadingController, ToastController} from '@ionic/angular';
import { formatDate } from '@angular/common';
import {ImagePicker} from '@ionic-native/image-picker/ngx';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {HistorialClinicoService} from '../../services/historial-clinico.service';
import {WebView} from '@ionic-native/ionic-webview/ngx';
import {NuevaCitaService} from '../../services/nueva-cita.service';


@Component({
  selector: 'app-nueva-cita',
  templateUrl: './nueva-cita.page.html',
  styleUrls: ['./nueva-cita.page.scss'],
})
export class NuevaCitaPage implements OnInit {
  validations_form: FormGroup;
  image: any;


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
  }

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
  private webview: WebView) { }

  ngOnInit() {
    this.resetEvent();
    this.resetFields();
  }

  resetFields() {
    this.validations_form = this.formBuilder.group({
      titulo: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      inicioCita: new FormControl('', Validators.required),
      finalCita: new FormControl('', Validators.required),
    });
  }

  onSubmit(value) {
    const data = {
      titulo: value.titulo,
      descripcion: value.descripcion,
      inicioCita: value.inicioCita,
      finalCita: value.finalCita,
    };
    this.firebaseService.crearNuevaCita(data)
        .then(
            res => {
              this.router.navigate(['/home-admin']);
            }
        );
  }

  async presentLoading(loading) {
    return await loading.present();
  }

  resetEvent(){
    this.event = {
      title: '',
      desc: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      allDay : false,
    };
    }

    addEvent(){
      let eventCopy = {
        title: this.event.title,
        startTime:  new Date(this.event.startTime),
        endTime: new Date(this.event.endTime),
        allDay: this.event.allDay,
        desc: this.event.desc
      }

      if (eventCopy.allDay) {
        let start = eventCopy.startTime;
        let end = eventCopy.endTime;
   
        eventCopy.startTime = new Date(Date.UTC(start.getUTCDate(), start.getUTCMonth(), start.getUTCFullYear()));
        eventCopy.endTime = new Date(Date.UTC(end.getUTCDate() + 1, end.getUTCMonth(), end.getUTCFullYear()));
      }

      this.eventSource.push(eventCopy);
      this.myCal.loadEvents();
      this.resetEvent();
    }

    next() {
      var swiper = document.querySelector('.swiper-container')['swiper'];
      swiper.slideNext();
    }
     
    back() {
      var swiper = document.querySelector('.swiper-container')['swiper'];
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
      let start = formatDate(event.startTime, 'medium', this.locale);
      let end = formatDate(event.endTime, 'medium', this.locale);
     
      const alert = await this.alertCtrl.create({
        header: event.title,
        subHeader: event.desc,
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
    this.event.startTime = selected.toISOString();
    selected.setHours(selected.getHours() + 1);
    this.event.endTime = (selected.toISOString());
  }


}
