import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MipesoUserPage } from './mipeso-user.page';
import { GraficaComponent } from '../../componentes/grafica/grafica.component';
import { ComponentsModule } from '../../componentes/cabecera/components.module';


const routes: Routes = [
  {
    path: '',
    component: MipesoUserPage
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
  declarations: [MipesoUserPage, GraficaComponent]
})
export class MipesoUserPageModule {}
