import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MipesoUserPage } from './mipeso-user.page';
import { GraficaComponent } from '../../componentes/grafica/grafica.component';
import { ComponentsModule } from '../../componentes/cabecera/components.module';
import { MiPesoResolver } from './mipeso-user.resolver';


const routes: Routes = [
  {
    path: '',
    component: MipesoUserPage,
    resolve: {
      data: MiPesoResolver
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
  declarations: [MipesoUserPage, GraficaComponent],
  providers: [MiPesoResolver]
})
export class MipesoUserPageModule {}
