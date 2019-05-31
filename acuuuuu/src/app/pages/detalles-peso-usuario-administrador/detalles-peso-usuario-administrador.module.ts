import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetallesPesoUsuarioAdministradorPage } from './detalles-peso-usuario-administrador.page';
import { ComponentsModule } from 'src/app/componentes/cabecera/components.module';
import { PesoUserAdminResolver } from './detalles-peso-usuario-admin.resolver';

const routes: Routes = [
  {
    path: '',
    component: DetallesPesoUsuarioAdministradorPage,
    resolve: {
      data: PesoUserAdminResolver,
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetallesPesoUsuarioAdministradorPage],
  providers: [PesoUserAdminResolver]
})
export class DetallesPesoUsuarioAdministradorPageModule {}
