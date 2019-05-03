import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlimentacionUserPage } from './alimentacion-user.page';

const routes: Routes = [
  {
    path: '',
    component: AlimentacionUserPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlimentacionUserPage]
})
export class AlimentacionUserPageModule {}
