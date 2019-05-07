import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetallesMenuHipocaloricaPage } from './detalles-menu-hipocalorica.page';
import { DetallesMenuHipoResolver } from './detalles-menu-hipocalorico.resolver';

const routes: Routes = [
  {
    path: '',
    component: DetallesMenuHipocaloricaPage,
    resolve: {
      data: DetallesMenuHipoResolver,
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
  declarations: [DetallesMenuHipocaloricaPage],
  providers: [DetallesMenuHipoResolver]
})
export class DetallesMenuHipocaloricaPageModule {}
