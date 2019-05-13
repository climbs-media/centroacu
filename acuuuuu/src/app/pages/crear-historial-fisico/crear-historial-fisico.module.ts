import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CrearHistorialFisicoPage } from './crear-historial-fisico.page';

const routes: Routes = [
  {
    path: '',
    component: CrearHistorialFisicoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CrearHistorialFisicoPage]
})
export class CrearHistorialFisicoPageModule {}
