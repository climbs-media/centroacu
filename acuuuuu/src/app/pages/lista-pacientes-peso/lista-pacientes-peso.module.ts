import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaPacientesPesoPage } from './lista-pacientes-peso.page';
import { ListaPesoResolver } from './lista-pacientes-peso.resolver';
import { ComponentsModule } from 'src/app/componentes/cabecera/components.module';

const routes: Routes = [
  {
    path: '',
    component: ListaPacientesPesoPage,
    resolve: {
      data: ListaPesoResolver
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
  declarations: [ListaPacientesPesoPage],
  providers: [ListaPesoResolver]
})
export class ListaPacientesPesoPageModule {}
