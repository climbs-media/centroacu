import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaDietasProteinasUserPage } from './lista-dietas-proteinas-user.page';
import { DietaProteinaUserResolver } from './lista-proteina.resolver';
import { ComponentsModule } from 'src/app/componentes/cabecera/components.module';

const routes: Routes = [
  {
    path: '',
    component: ListaDietasProteinasUserPage,
    resolve: {
      data: DietaProteinaUserResolver
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
  declarations: [ListaDietasProteinasUserPage],
  providers: [DietaProteinaUserResolver]
})
export class ListaDietasProteinasUserPageModule {}
