import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetallesBonosPacientesUserPage } from './detalles-bonos-pacientes-user.page';
import { DetallesBonoUserResolver } from './detalles-bonos-pacientes-user.resolver';
import { ComponentsModule } from 'src/app/componentes/cabecera/components.module';

const routes: Routes = [
  {
    path: '',
    component: DetallesBonosPacientesUserPage,
    resolve:{
      data: DetallesBonoUserResolver
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
  declarations: [DetallesBonosPacientesUserPage],
  providers: [DetallesBonoUserResolver]
})
export class DetallesBonosPacientesUserPageModule {}
