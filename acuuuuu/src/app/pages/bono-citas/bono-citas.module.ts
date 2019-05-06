import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BonoCitasPage } from './bono-citas.page';
import { BonoResolver } from './bono-citas.resolver';

const routes: Routes = [
  {
    path: '',
    component: BonoCitasPage,
    resolve: {
      data: BonoResolver,
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
  declarations: [BonoCitasPage],
  providers: [BonoResolver]
})
export class BonoCitasPageModule {}
