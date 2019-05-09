import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuProteinaPage } from './menu-proteina.page';
import { ComponentsModule } from '../../componentes/cabecera/components.module';
const routes: Routes = [
  {
    path: '',
    component: MenuProteinaPage
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
  declarations: [MenuProteinaPage]
})
export class MenuProteinaPageModule {}
