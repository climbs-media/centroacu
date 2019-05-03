import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HistorialClinicoPage } from './historial-clinico.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialClinicoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HistorialClinicoPage]
})
export class HistorialClinicoPageModule {}
