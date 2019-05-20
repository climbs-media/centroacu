import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClientePerfilUserPage } from './cliente-perfil-user.page';
import { ClientePerfilUserResolver } from './cliente-perfil-user.resolver';
import { ComponentsModule } from 'src/app/componentes/cabecera/components.module';

const routes: Routes = [
  {
    path: '',
    component: ClientePerfilUserPage,
    resolve: {
      data: ClientePerfilUserResolver,
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
  declarations: [ClientePerfilUserPage],
  providers: [ ClientePerfilUserResolver],
})
export class ClientePerfilUserPageModule {}
