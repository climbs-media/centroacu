import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomeAdminPage } from './home-admin.page';
import { HomeAdminResolver } from './home-admin.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeAdminPage,
    resolve: {
      data: HomeAdminResolver
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
  declarations: [HomeAdminPage],
  providers: [HomeAdminResolver]
})
export class HomeAdminPageModule {}
