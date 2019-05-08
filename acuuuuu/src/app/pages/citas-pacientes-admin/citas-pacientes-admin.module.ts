import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CitasPacientesAdminPage } from './citas-pacientes-admin.page';
import { CitasPacientesResolver } from './citas-pacientes-admin.resolver';

const routes: Routes = [
  {
    path: '',
    component: CitasPacientesAdminPage,
    resolve: {
      data: CitasPacientesResolver
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
  declarations: [CitasPacientesAdminPage],
  providers: [CitasPacientesResolver]
})
export class CitasPacientesAdminPageModule {}
