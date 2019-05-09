import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaCitasPage } from './lista-citas.page';
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
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaCitasPage],
  providers: [CitasResolver]
})
export class ListaCitasPageModule {}
