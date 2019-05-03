import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-diario-ejercicio',
  templateUrl: './diario-ejercicio.page.html',
  styleUrls: ['./diario-ejercicio.page.scss'],
})
export class DiarioEjercicioPage implements OnInit {

  event = {
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    allDay : false
  };
  minDate = new Date().toISOString();

  eventSource = [];

  calendar= { 
    mode: 'week',
    currentDate: new Date(),
  }

  viewTitle = '';

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor( private alertCtrl: AlertController, @Inject(LOCALE_ID) private locale: string) { }

  ngOnInit() {
    this.resetEvent();
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
    let selected = new Date(ev.selectedTime);
    this.event.startTime = selected.toISOString();
    selected.setHours(selected.getHours() + 1);
    this.event.endTime = (selected.toISOString());
  }




}
