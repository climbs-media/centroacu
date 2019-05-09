import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetallesEjerciciosPacientesAdminPage } from './detalles-ejercicios-pacientes-admin.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesEjerciciosPacientesAdminPage
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
  declarations: [DetallesEjerciciosPacientesAdminPage]
})
export class DetallesEjerciciosPacientesAdminPageModule {}