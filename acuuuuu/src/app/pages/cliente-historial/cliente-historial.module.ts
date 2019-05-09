import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClienteHistorialPage } from './cliente-historial.page';
import { ClienteHistoricoResolver } from './cliente-historial.resolver';
import { ComponentsModule } from '../../componentes/cabecera/components.module';
const routes: Routes = [
  {
    path: '',
    component: ClienteHistorialPage,
    resolve: {
      data: ClienteHistoricoResolver,
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ClienteHistorialPage],
  providers: [ClienteHistoricoResolver]
})
export class ClienteHistorialPageModule {}
