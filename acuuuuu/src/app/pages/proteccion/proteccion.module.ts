import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProteccionPage } from './proteccion.page';
import { ComponentsModule } from '../../componentes/cabecera/components.module';
import { SignaturePadModule } from 'angular2-signaturepad';
import { IonicStorageModule } from '@ionic/storage';


const routes: Routes = [
  {
    path: '',
    component: ProteccionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SignaturePadModule,
    IonicStorageModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  declarations: [ProteccionPage]
})
export class ProteccionPageModule {}
