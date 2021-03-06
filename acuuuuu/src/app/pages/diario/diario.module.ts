import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DiarioPage } from './diario.page';
import { ComponentsModule } from '../../componentes/cabecera/components.module';

const routes: Routes = [
  {
    path: '',
    component: DiarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DiarioPage]
})
export class DiarioPageModule {}
