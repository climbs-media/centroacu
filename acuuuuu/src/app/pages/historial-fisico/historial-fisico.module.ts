import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HistorialFisicoPage } from './historial-fisico.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialFisicoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HistorialFisicoPage]
})
export class HistorialFisicoPageModule {}
