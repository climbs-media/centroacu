import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule, Resolve } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetallesMenuProteinaPage } from './detalles-menu-proteina.page';
import { DetallesMenuProteinaResolver } from './detalles-menu-proteina.resolver';

const routes: Routes = [
  {
    path: '',
    component: DetallesMenuProteinaPage,
    resolve: {
      data: DetallesMenuProteinaResolver,
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
  declarations: [DetallesMenuProteinaPage],
  providers: [DetallesMenuProteinaResolver]
})
export class DetallesMenuProteinaPageModule {}
