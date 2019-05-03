import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BonosAcreditadosPage } from './bonos-acreditados.page';

const routes: Routes = [
  {
    path: '',
    component: BonosAcreditadosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BonosAcreditadosPage]
})
export class BonosAcreditadosPageModule {}
