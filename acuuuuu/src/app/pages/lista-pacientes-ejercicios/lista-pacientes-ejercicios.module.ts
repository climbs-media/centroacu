import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaPacientesEjerciciosPage } from './lista-pacientes-ejercicios.page';
import { EjercicioResolver } from './lista-pacientes-ejercicios.resolver';
import { ComponentsModule } from '../../componentes/cabecera/components.module';

const routes: Routes = [
  {
    path: '',
    component: ListaPacientesEjerciciosPage,
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
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaPacientesEjerciciosPage],
  providers: [EjercicioResolver]
})
export class ListaPacientesEjerciciosPageModule {}
