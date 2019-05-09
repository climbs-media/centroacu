import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import { HomeUserPageModule } from '../home-user/home-user.module';
import { EjercicioUserPageModule } from '../ejercicio-user/ejercicio-user.module';
import { AlimentacionUserPageModule } from '../alimentacion-user/alimentacion-user.module';
import { DiarioUserPageModule } from '../diario-user/diario-user.module';
import { MipesoUserPageModule } from '../mipeso-user/mipeso-user.module';
import { MipesoPageModule } from '../mipeso/mipeso.module';
import { DiarioEjercicioPageModule } from '../diario-ejercicio/diario-ejercicio.module';
import { DietasPacientesPageModule } from '../dietas-pacientes/dietas-pacientes.module';
import { DiarioDieteticoPageModule } from '../diario-dietetico/diario-dietetico.module';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      { path: 'tab1', loadChildren: () => HomeUserPageModule },
      { path: 'tab1/ejercicio-user', loadChildren: () => EjercicioUserPageModule },

        { path: 'tab2', loadChildren: () => DiarioDieteticoPageModule },
        { path: 'tab3', loadChildren: () => DietasPacientesPageModule },

        { path: 'tab4', loadChildren: () => MipesoPageModule }, // ESTA EN DUDA PARA CREAR MI PESO USER

        { path: 'tab5', loadChildren: () => DiarioEjercicioPageModule },



    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/tabs/tab2',
    pathMatch: 'full'
  },

  {
    path: '',
    redirectTo: '/tabs/tab3',
    pathMatch: 'full'
  },

  {
    path: '',
    redirectTo: '/tabs/tab4',
    pathMatch: 'full'
  },

  {
    path: '',
    redirectTo: '/tabs/tab5',
    pathMatch: 'full'
  },







];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
