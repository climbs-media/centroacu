import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuHipocaloricaPage } from './menu-hipocalorica.page';

const routes: Routes = [
  {
    path: '',
    component: MenuHipocaloricaPage
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
  declarations: [MenuHipocaloricaPage]
})
export class MenuHipocaloricaPageModule {}
