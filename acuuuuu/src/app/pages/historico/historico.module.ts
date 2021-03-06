import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HistoricoPage } from './historico.page';
import { HistoricoResolver } from './historico.resolver';
import { ComponentsModule } from '../../componentes/cabecera/components.module';

const routes: Routes = [
  {
    path: '',
    component: HistoricoPage,
    resolve: {
      data: HistoricoResolver,
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
  declarations: [HistoricoPage],
  providers: [HistoricoResolver]
})
export class HistoricoPageModule {}
