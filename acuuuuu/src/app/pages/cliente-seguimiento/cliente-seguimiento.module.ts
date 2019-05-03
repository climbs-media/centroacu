import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClienteSeguimientoPage } from './cliente-seguimiento.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteSeguimientoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ClienteSeguimientoPage]
})
export class ClienteSeguimientoPageModule {}
