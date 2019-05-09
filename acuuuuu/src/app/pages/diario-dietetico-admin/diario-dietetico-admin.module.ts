import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DiarioDieteticoAdminPage } from './diario-dietetico-admin.page';

const routes: Routes = [
  {
    path: '',
    component: DiarioDieteticoAdminPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DiarioDieteticoAdminPage]
})
export class DiarioDieteticoAdminPageModule {}
