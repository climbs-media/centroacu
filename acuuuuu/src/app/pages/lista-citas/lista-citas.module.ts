import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaCitasPage } from './lista-citas.page';
import { ComponentsModule } from '../../componentes/cabecera/components.module';
import { CitasResolver } from './lista-cites.resolver';

const routes: Routes = [
  {
    path: '',
    component: ListaCitasPage,
    resolve: {
      data: CitasResolver
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
  declarations: [ListaCitasPage],
  providers: [CitasResolver]
})
export class ListaCitasPageModule {}
