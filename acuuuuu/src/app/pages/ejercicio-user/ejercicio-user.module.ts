import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EjercicioUserPage } from './ejercicio-user.page';
import { ComponentsModule } from '../../componentes/cabecera/components.module';
import { EjercicioUserResolver } from './ejercicio-user.resolver';

const routes: Routes = [
  {
    path: '',
    component: EjercicioUserPage,
    resolve:{
      data: EjercicioUserResolver
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
  declarations: [EjercicioUserPage],
  providers: [EjercicioUserResolver]
})
export class EjercicioUserPageModule {}
