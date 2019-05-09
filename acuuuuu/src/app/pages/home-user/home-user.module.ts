import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomeUserPage } from './home-user.page';
import { ChartsModule } from 'ng2-charts';
import { ComponentsModule } from '../../componentes/cabecera/components.module';

const routes: Routes = [
  {
    path: '',
    component: HomeUserPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    ComponentsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeUserPage]
})
export class HomeUserPageModule {}
