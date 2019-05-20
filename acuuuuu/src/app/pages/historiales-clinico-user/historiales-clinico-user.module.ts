import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HistorialesClinicoUserPage } from './historiales-clinico-user.page';
import { HistorialesUserResolver } from './historiales-clinicos-user.resolver';
import { ComponentsModule } from 'src/app/componentes/cabecera/components.module';

const routes: Routes = [
  {
    path: '',
    component: HistorialesClinicoUserPage,
    resolve:{
      data: HistorialesUserResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HistorialesClinicoUserPage],
  providers: [HistorialesUserResolver]
})
export class HistorialesClinicoUserPageModule {}
