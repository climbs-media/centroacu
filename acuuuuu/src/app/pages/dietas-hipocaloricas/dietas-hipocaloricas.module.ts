import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DietasHipocaloricasPage } from './dietas-hipocaloricas.page';
import { DietaHipocaloricaResolver } from './dietas-hipocalorivas.resolver';

const routes: Routes = [
  {
    path: '',
    component: DietasHipocaloricasPage,
    resolve: {
      data: DietaHipocaloricaResolver
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
  declarations: [DietasHipocaloricasPage],
  providers: [DietaHipocaloricaResolver]
})
export class DietasHipocaloricasPageModule {}
