import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaDietasCenaUserPage } from './lista-dietas-cena-user.page';
import { DietaCenasUserResolver } from './lista-cenas.resolver';
import { ComponentsModule } from 'src/app/componentes/cabecera/components.module';

const routes: Routes = [
  {
    path: '',
    component: ListaDietasCenaUserPage,
    resolve: {
      data: DietaCenasUserResolver
    }
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
  declarations: [ListaDietasCenaUserPage],
  providers: [DietaCenasUserResolver]
})
export class ListaDietasCenaUserPageModule {}
