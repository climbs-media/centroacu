import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaHistorialDieteticoUserPage } from './lista-historial-dietetico-user.page';
import { ComponentsModule } from 'src/app/componentes/cabecera/components.module';
import { DieteticoUserResolver } from './lista-historial-dietetico-user.resolver';

const routes: Routes = [
  {
    path: '',
    component: ListaHistorialDieteticoUserPage,
    resolve:{
      data: DieteticoUserResolver
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
  declarations: [ListaHistorialDieteticoUserPage],
  providers: [DieteticoUserResolver]
})
export class ListaHistorialDieteticoUserPageModule {}
