import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EjerciciosDelUsuarioPage } from './ejercicios-del-usuario.page';
import { EjercicioDelUserResolver } from './ejercicios-del-usuario.resolver';
import { ComponentsModule } from 'src/app/componentes/cabecera/components.module';

const routes: Routes = [
  {
    path: '',
    component: EjerciciosDelUsuarioPage,
    resolve: {
      data: EjercicioDelUserResolver,
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EjerciciosDelUsuarioPage],
  providers: [EjercicioDelUserResolver]
})
export class EjerciciosDelUsuarioPageModule {}
