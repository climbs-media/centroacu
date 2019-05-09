import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NuevaCitaPage } from './nueva-cita.page';
import { NgCalendarModule } from 'ionic2-calendar';
import { CitaResolver } from './nueva-cita.resolver';
import { ComponentsModule } from '../../componentes/cabecera/components.module';

const routes: Routes = [
  {
    path: '',
    component: NuevaCitaPage,
    resolve: {
      data: CitaResolver,
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
  declarations: [NuevaCitaPage],
  providers: [CitaResolver]
})
export class NuevaCitaPageModule {}
