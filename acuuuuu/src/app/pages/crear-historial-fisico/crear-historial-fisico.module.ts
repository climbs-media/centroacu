import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CrearHistorialFisicoPage } from './crear-historial-fisico.page';
import { ComponentsModule } from 'src/app/componentes/cabecera/components.module';

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
    ComponentsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CrearHistorialFisicoPage]
})
export class CrearHistorialFisicoPageModule {}
