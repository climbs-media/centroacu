import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetallMensajesPage } from './detall-mensajes.page';
import { ChatResolver } from './detall-mensajes.resolver';

const routes: Routes = [
  {
    path: '',
    component: DetallMensajesPage,
    resolve: {
      data: ChatResolver,
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
  declarations: [DetallMensajesPage],
  providers: [ChatResolver]
})
export class DetallMensajesPageModule {}
