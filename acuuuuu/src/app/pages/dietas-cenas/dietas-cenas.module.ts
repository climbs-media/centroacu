import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DietasCenasPage } from './dietas-cenas.page';
import { ComponentsModule } from '../../componentes/cabecera/components.module';
import { DietaCenaResolver } from './dieras-cenas.resolver';

const routes: Routes = [
  {
    path: '',
    component: DietasCenasPage,
    resolve: {
    data:  DietaCenaResolver
    }
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
  declarations: [DietasCenasPage],
  providers: [DietaCenaResolver]
})
export class DietasCenasPageModule {}
