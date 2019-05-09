import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaMensajesAdminPage } from './lista-mensajes-admin.page';
import { ChatResolver } from './lista-mensajes-admin.resolver';

const routes: Routes = [
  {
    path: '',
    component: ListaMensajesAdminPage,
    resolve: {
      data: ChatResolver
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
  declarations: [ListaMensajesAdminPage],
  providers: [ChatResolver]
})
export class ListaMensajesAdminPageModule {}
