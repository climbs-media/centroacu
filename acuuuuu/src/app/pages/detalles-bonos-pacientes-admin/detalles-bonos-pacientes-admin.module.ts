import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetallesBonosPacientesAdminPage } from './detalles-bonos-pacientes-admin.page';
import { ComponentsModule } from 'src/app/componentes/cabecera/components.module';
import { DetallesBonoResolver } from './detalles-bonos-pacientes.resolver';

const routes: Routes = [
  {
    path: '',
    component: DetallesBonosPacientesAdminPage,
    resolve: {
      data: DetallesBonoResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetallesBonosPacientesAdminPage],
  providers: [DetallesBonoResolver]
})
export class DetallesBonosPacientesAdminPageModule {}
