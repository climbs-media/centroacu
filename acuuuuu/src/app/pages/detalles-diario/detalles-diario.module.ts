import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetallesDiarioPage } from './detalles-diario.page';
import { DetallesDiarioResolver } from './detalles-diario.resolver';
import { ComponentsModule } from '../../componentes/cabecera/components.module';
const routes: Routes = [
  {
    path: '',
    component: DetallesDiarioPage,
    resolve: {
      data: DetallesDiarioResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetallesDiarioPage],
  providers: [DetallesDiarioResolver]
})
export class DetallesDiarioPageModule {}
