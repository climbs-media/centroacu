import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetallesHistorialFisicoPage } from './detalles-historial-fisico.page';
import { DetallesFisicoResolver } from './detalles-historial-fisico.resolver';
import { ComponentsModule } from '../../componentes/cabecera/components.module';

const routes: Routes = [
  {
    path: '',
    component: DetallesHistorialFisicoPage,
    resolve: {
      data: DetallesFisicoResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetallesHistorialFisicoPage],
  providers: [DetallesFisicoResolver]
})
export class DetallesHistorialFisicoPageModule {}
