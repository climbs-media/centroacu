import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-popover-historial-dietetico',
  templateUrl: './popover-historial-dietetico.page.html',
  styleUrls: ['./popover-historial-dietetico.page.scss'],
})
export class PopoverHistorialDieteticoPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modalController.dismiss();
  }
}


