import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PaginaDietasPacientesPage } from './pagina-dietas-pacientes.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaDietasPacientesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PaginaDietasPacientesPage]
})
export class PaginaDietasPacientesPageModule {}
