import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaDietasHipocaloricasUserPage } from './lista-dietas-hipocaloricas-user.page';
import { DietaHipocaloricaUserResolver } from './lista-hipocalorias.resolver';
import { ComponentsModule } from 'src/app/componentes/cabecera/components.module';

const routes: Routes = [
  {
    path: '',
    component: ListaDietasHipocaloricasUserPage,
    resolve: {
      data: DietaHipocaloricaUserResolver,
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaDietasHipocaloricasUserPage],
  providers: [DietaHipocaloricaUserResolver]
})
export class ListaDietasHipocaloricasUserPageModule {}
