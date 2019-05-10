import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomeUserPage } from './home-user.page';
import { ChartsModule } from 'ng2-charts';
import { ComponentsModule } from '../../componentes/cabecera/components.module';
import { HomeUserResolver } from './home-user.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeUserPage,
    resolve: {
      data: HomeUserResolver
    }
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
  declarations: [HomeUserPage],
  providers: [HomeUserResolver]
})
export class HomeUserPageModule {}
