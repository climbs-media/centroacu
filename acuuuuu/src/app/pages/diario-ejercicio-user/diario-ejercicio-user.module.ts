import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DiarioEjercicioUserPage } from './diario-ejercicio-user.page';
import { ComponentsModule } from 'src/app/componentes/cabecera/components.module';
import { EjercicioDelPacienteResolver } from './diario-ejercicio-user.resolver';
import { NgCalendarModule } from 'ionic2-calendar';

const routes: Routes = [
  {
    path: '',
    component: DiarioEjercicioUserPage,
    resolve: {
      data: EjercicioDelPacienteResolver
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
    NgCalendarModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DiarioEjercicioUserPage],
  providers: [EjercicioDelPacienteResolver]
})
export class DiarioEjercicioUserPageModule {}
