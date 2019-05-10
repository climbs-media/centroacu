import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetallesHistorialDieteticoPage } from './detalles-historial-dietetico.page';
import { DetallesHistorialDieteticoResolver } from './detalles-histoial-dietetico.resolver';

const routes: Routes = [
  {
    path: '',
    component: DetallesHistorialDieteticoPage,
    resolve: {
      data: DetallesHistorialDieteticoResolver
    }
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
  declarations: [DetallesHistorialDieteticoPage],
  providers: [DetallesHistorialDieteticoResolver]
})
export class DetallesHistorialDieteticoPageModule {}
