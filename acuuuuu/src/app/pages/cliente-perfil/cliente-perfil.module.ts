import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClientePerfilPage } from './cliente-perfil.page';
import { ClientePerfilResolver } from './cliente-perfil.resolver';
import { ComponentsModule } from '../../componentes/cabecera/components.module';

const routes: Routes = [
  {
    path: '',
    component: ClientePerfilPage,
    resolve: {
      data: ClientePerfilResolver,
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ClientePerfilPage],
  providers: [ClientePerfilResolver]
})
export class ClientePerfilPageModule {}
