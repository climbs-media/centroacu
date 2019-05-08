import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CitasAdminPage } from './citas-admin.page';
import { CitasResolver } from './citas-admin.resolver';

const routes: Routes = [
  {
    path: '',
    component: CitasAdminPage,
    resolve: {
      data: CitasResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CitasAdminPage],
  providers: [CitasResolver]
})
export class CitasAdminPageModule {}
