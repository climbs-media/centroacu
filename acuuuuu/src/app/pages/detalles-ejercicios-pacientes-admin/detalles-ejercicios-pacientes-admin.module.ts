import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../componentes/cabecera/components.module';
import { DetallesEjerciciosPacientesAdminPage } from './detalles-ejercicios-pacientes-admin.page';
import { DetallesEjerciciosResolver } from './detalles-ejercicios-admin.resolver';

const routes: Routes = [
  {
    path: '',
    component: DetallesEjerciciosPacientesAdminPage,
    resolve: {
      data: DetallesEjerciciosResolver
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
  declarations: [DetallesEjerciciosPacientesAdminPage],
  providers: [DetallesEjerciciosResolver]
})
export class DetallesEjerciciosPacientesAdminPageModule {}
