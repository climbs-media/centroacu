import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClienteAdminPrincipalPage } from './cliente-admin-principal.page';
import { ClienteAdminPerfilResolver } from './cliente-admin-principal.resolver';
import { ComponentsModule } from 'src/app/componentes/cabecera/components.module';

const routes: Routes = [
  {
    path: '',
    component: ClienteAdminPrincipalPage,
    resolve: {
      data: ClienteAdminPerfilResolver
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
  declarations: [ClienteAdminPrincipalPage],
  providers: [ClienteAdminPerfilResolver]
})
export class ClienteAdminPrincipalPageModule {}
