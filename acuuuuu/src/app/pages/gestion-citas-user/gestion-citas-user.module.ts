import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GestionCitasUserPage } from './gestion-citas-user.page';
import { ComponentsModule } from 'src/app/componentes/cabecera/components.module';

const routes: Routes = [
  {
    path: '',
    component: GestionCitasUserPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GestionCitasUserPage]
})
export class GestionCitasUserPageModule {}
