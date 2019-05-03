import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DietasCenasPage } from './dietas-cenas.page';

const routes: Routes = [
  {
    path: '',
    component: DietasCenasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DietasCenasPage]
})
export class DietasCenasPageModule {}
