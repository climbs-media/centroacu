import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DiarioEjercicioPage } from './diario-ejercicio.page';
import { NgCalendarModule } from 'ionic2-calendar';
import { ComponentsModule } from '../../componentes/cabecera/components.module';
import { EjercicioResolver } from './diario-ejercicio.resolver';

const routes: Routes = [
  {
    path: '',
    component: DiarioEjercicioPage,
    resolve: {
      data: EjercicioResolver
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
  declarations: [DiarioEjercicioPage],
  providers: [EjercicioResolver]
})
export class DiarioEjercicioPageModule {}
