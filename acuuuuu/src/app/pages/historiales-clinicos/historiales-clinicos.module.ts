import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HistorialesClinicosPage } from './historiales-clinicos.page';
import { HistorialesResolver } from './historiales-clinicos.resolver';

const routes: Routes = [
  {
    path: '',
    component: HistorialesClinicosPage,
    resolve: {
      data: HistorialesResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HistorialesClinicosPage],
  providers: [HistorialesResolver]
})
export class HistorialesClinicosPageModule {}
