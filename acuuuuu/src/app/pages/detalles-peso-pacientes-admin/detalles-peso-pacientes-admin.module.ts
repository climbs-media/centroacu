import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetallesPesoPacientesAdminPage } from './detalles-peso-pacientes-admin.page';
import { DetallesPesoResolver } from './detalles-peso-pacientes.resolver';

const routes: Routes = [
  {
    path: '',
    component: DetallesPesoPacientesAdminPage,
    resolve: {
      data: DetallesPesoResolver
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
  declarations: [DetallesPesoPacientesAdminPage],
  providers: [DetallesPesoResolver]
})
export class DetallesPesoPacientesAdminPageModule {}
