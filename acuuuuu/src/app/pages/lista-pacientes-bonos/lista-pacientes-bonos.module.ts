import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaPacientesBonosPage } from './lista-pacientes-bonos.page';
import { BonosResolver } from './lista-pacientes-bonos.resolver';
import { ComponentsModule } from 'src/app/componentes/cabecera/components.module';

const routes: Routes = [
  {
    path: '',
    component: ListaPacientesBonosPage,
    resolve: {
      data: BonosResolver
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
  declarations: [ListaPacientesBonosPage],
  providers: [BonosResolver]
})
export class ListaPacientesBonosPageModule {}
