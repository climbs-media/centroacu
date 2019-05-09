import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../componentes/cabecera/components.module';
import { DiarioUserPage } from './diario-user.page';

const routes: Routes = [
  {
    path: '',
    component: DiarioUserPage
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
  declarations: [DiarioUserPage]
})
export class DiarioUserPageModule {}
