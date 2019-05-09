import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaPacientePesoPage } from './lista-paciente-peso.page';
import { PesoResolver } from './lista-paciente-eso.resolver';
import { ComponentsModule } from '../../componentes/cabecera/components.module';

const routes: Routes = [
  {
    path: '',
    component: ListaPacientePesoPage,
    resolve: {
      data: PesoResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaPacientePesoPage],
  providers: [PesoResolver]
})
export class ListaPacientePesoPageModule {}
