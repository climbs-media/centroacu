import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaCitasPacientesPage } from './lista-citas-pacientes.page';
import { CitasResolver } from './lista-citas-pacientes.resolver';
import { ComponentsModule } from 'src/app/componentes/cabecera/components.module';

const routes: Routes = [
  {
    path: '',
    component: ListaCitasPacientesPage,
    resolve: {
      data: CitasResolver
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
  declarations: [ListaCitasPacientesPage],
  providers: [CitasResolver]
})
export class ListaCitasPacientesPageModule {}
