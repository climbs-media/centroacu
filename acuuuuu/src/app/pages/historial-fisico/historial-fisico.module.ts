import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HistorialFisicoPage } from './historial-fisico.page';
import { HistoricoFisicoResolver } from './historial-fisico.resolver';
import { ComponentsModule } from '../../componentes/cabecera/components.module';

const routes: Routes = [
  {
    path: '',
    component: HistorialFisicoPage,
    resolve: {
      data: HistoricoFisicoResolver,
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
  declarations: [HistorialFisicoPage],
  providers: [HistoricoFisicoResolver]
})
export class HistorialFisicoPageModule {}
