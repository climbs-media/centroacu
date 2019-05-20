import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaPacientesBonosUserPage } from './lista-pacientes-bonos-user.page';
import { ComponentsModule } from 'src/app/componentes/cabecera/components.module';
import { BonosUserResolver } from './lista-pacientes-bonos-user.resolver';

const routes: Routes = [
  {
    path: '',
    component: ListaPacientesBonosUserPage,
    resolve: {
      data: BonosUserResolver
    }
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
  declarations: [ListaPacientesBonosUserPage],
  providers: [BonosUserResolver]
})
export class ListaPacientesBonosUserPageModule {}
