import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditarPesoPage } from './editar-peso.page';
import { EditarPesoResolver } from './editar-peso.resolver';

const routes: Routes = [
  {
    path: '',
    component: EditarPesoPage,
    resolve: {
    data: EditarPesoResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditarPesoPage],
  providers: [EditarPesoResolver]
})
export class EditarPesoPageModule {}
