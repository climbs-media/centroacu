import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CrearDiarioDieteticoPage } from './crear-diario-dietetico.page';

const routes: Routes = [
  {
    path: '',
    component: CrearDiarioDieteticoPage
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
  declarations: [CrearDiarioDieteticoPage]
})
export class CrearDiarioDieteticoPageModule {}
