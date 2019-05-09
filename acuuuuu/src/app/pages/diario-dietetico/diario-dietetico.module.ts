import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DiarioDieteticoPage } from './diario-dietetico.page';
<<<<<<< HEAD
import { ComponentsModule } from '../../componentes/cabecera/components.module';
=======
import { DiarioResolver } from './diario-dietetico.resolver';
>>>>>>> ab22a7aaa920a1b675e30f11ebef7b4480872580

const routes: Routes = [
  {
    path: '',
    component: DiarioDieteticoPage,
    resolve: {
      data: DiarioResolver
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
  declarations: [DiarioDieteticoPage],
  providers: [DiarioResolver]
})
export class DiarioDieteticoPageModule {}
