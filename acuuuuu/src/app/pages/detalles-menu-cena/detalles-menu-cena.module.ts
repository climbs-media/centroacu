import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetallesMenuCenaPage } from './detalles-menu-cena.page';
import { DetallesMenuCenaResolver } from './detalles-menu-cena.resolver';

const routes: Routes = [
  {
    path: '',
    component: DetallesMenuCenaPage,
    resolve: {
      data: DetallesMenuCenaResolver
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
  declarations: [DetallesMenuCenaPage],
  providers: [DetallesMenuCenaResolver]
})
export class DetallesMenuCenaPageModule {}
