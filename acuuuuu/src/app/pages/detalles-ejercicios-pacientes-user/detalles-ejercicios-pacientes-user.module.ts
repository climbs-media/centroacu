import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetallesEjerciciosPacientesUserPage } from './detalles-ejercicios-pacientes-user.page';
import { ComponentsModule } from 'src/app/componentes/cabecera/components.module';
import { DetallesEjerciciosUserResolver } from './detalles-ejercicio-pacientes-user.resolver';

const routes: Routes = [
  {
    path: '',
    component: DetallesEjerciciosPacientesUserPage,
    resolve: {
      data:DetallesEjerciciosUserResolver
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
  declarations: [DetallesEjerciciosPacientesUserPage],
  providers:[DetallesEjerciciosUserResolver]
})
export class DetallesEjerciciosPacientesUserPageModule {}
