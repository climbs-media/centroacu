import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaPacientesPesoUserPage } from './lista-pacientes-peso-user.page';
import { ComponentsModule } from 'src/app/componentes/cabecera/components.module';
import { ListaPesoUserResolver } from './lista-pacientes-peso-user.resolver';
import { ChartsModule } from 'ng2-charts';

const routes: Routes = [
  {
    path: '',
    component: ListaPacientesPesoUserPage,
    resolve: {
      data: ListaPesoUserResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    ReactiveFormsModule,
    ComponentsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaPacientesPesoUserPage],
  providers: [ListaPesoUserResolver]
})
export class ListaPacientesPesoUserPageModule {}
