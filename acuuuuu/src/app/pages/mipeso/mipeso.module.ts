import { MiPseResolver } from './mipeso.resolver';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MipesoPage } from './mipeso.page';


const routes: Routes = [
  {
    path: '',
    component: MipesoPage,
    resolve: {
      data: MiPseResolver
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
  declarations: [MipesoPage, ],
  providers: [MiPseResolver],
})
export class MipesoPageModule {}
