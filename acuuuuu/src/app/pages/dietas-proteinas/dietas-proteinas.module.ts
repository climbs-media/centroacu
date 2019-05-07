import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DietasProteinasPage } from './dietas-proteinas.page';
import { DietaProteinaResolver } from './dieras-proteinas.resolver';

const routes: Routes = [
  {
    path: '',
    component: DietasProteinasPage,
    resolve: {
      data: DietaProteinaResolver,
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
  declarations: [DietasProteinasPage],
  providers: [DietaProteinaResolver]
})
export class DietasProteinasPageModule {}
