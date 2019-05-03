import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalDiarioDieteticoPage } from './modal-diario-dietetico.page';

const routes: Routes = [
  {
    path: '',
    component: ModalDiarioDieteticoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalDiarioDieteticoPage]
})
export class ModalDiarioDieteticoPageModule {}
