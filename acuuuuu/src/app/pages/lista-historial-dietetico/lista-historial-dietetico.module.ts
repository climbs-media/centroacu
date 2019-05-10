import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaHistorialDieteticoPage } from './lista-historial-dietetico.page';
import { DieteticoResolver } from './lista-historial-dietetico.resolver';
import { ComponentsModule } from 'src/app/componentes/cabecera/components.module';

const routes: Routes = [
  {
    path: '',
    component: ListaHistorialDieteticoPage,
    resolve: {
      data: DieteticoResolver
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
  declarations: [ListaHistorialDieteticoPage],
  providers: [DieteticoResolver]
})
export class ListaHistorialDieteticoPageModule {}
