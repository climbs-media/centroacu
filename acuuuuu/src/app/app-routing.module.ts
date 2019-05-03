import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login-admin', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },

  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'login-admin', loadChildren: './pages/login-admin/login-admin.module#LoginAdminPageModule' },
  { path: 'home-admin', loadChildren: './pages/home-admin/home-admin.module#HomeAdminPageModule' },
  { path: 'cliente-perfil', loadChildren: './pages/cliente-perfil/cliente-perfil.module#ClientePerfilPageModule' },
  { path: 'cliente-seguimiento', loadChildren: './pages/cliente-seguimiento/cliente-seguimiento.module#ClienteSeguimientoPageModule' },
  { path: 'gestion-citas', loadChildren: './pages/gestion-citas/gestion-citas.module#GestionCitasPageModule' },
  { path: 'proteccion', loadChildren: './pages/proteccion/proteccion.module#ProteccionPageModule' },
  { path: 'agregar-cliente', loadChildren: './pages/agregar-cliente/agregar-cliente.module#AgregarClientePageModule' },
  { path: 'seguimiento', loadChildren: './pages/seguimiento/seguimiento.module#SeguimientoPageModule' },
  { path: 'mipeso', loadChildren: './pages/mipeso/mipeso.module#MipesoPageModule' },
  { path: 'diario', loadChildren: './pages/diario/diario.module#DiarioPageModule' },
  { path: 'modal-diario-dietetico', loadChildren: './pages/modal-diario-dietetico/modal-diario-dietetico.module#ModalDiarioDieteticoPageModule' },
  { path: 'historial-clinico', loadChildren: './pages/historial-clinico/historial-clinico.module#HistorialClinicoPageModule' },
  { path: 'bono-citas', loadChildren: './pages/bono-citas/bono-citas.module#BonoCitasPageModule' },
  { path: 'historico', loadChildren: './pages/historico/historico.module#HistoricoPageModule' },
  { path: 'nueva-dieta', loadChildren: './pages/nueva-dieta/nueva-dieta.module#NuevaDietaPageModule' },
  { path: 'menus', loadChildren: './pages/menus/menus.module#MenusPageModule' },
  { path: 'ajustes', loadChildren: './pages/ajustes/ajustes.module#AjustesPageModule' },
  { path: 'nueva-cita', loadChildren: './pages/nueva-cita/nueva-cita.module#NuevaCitaPageModule' },
  { path: 'diario-ejercicio', loadChildren: './pages/diario-ejercicio/diario-ejercicio.module#DiarioEjercicioPageModule' },
  { path: 'dietas-hipocaloricas', loadChildren: './pages/dietas-hipocaloricas/dietas-hipocaloricas.module#DietasHipocaloricasPageModule' },
  { path: 'dietas-proteinas', loadChildren: './pages/dietas-proteinas/dietas-proteinas.module#DietasProteinasPageModule' },
  { path: 'dietas-cenas', loadChildren: './pages/dietas-cenas/dietas-cenas.module#DietasCenasPageModule' },
  { path: 'editar', loadChildren: './pages/editar/editar.module#EditarPageModule' },
  { path: 'bonos-acreditados', loadChildren: './pages/bonos-acreditados/bonos-acreditados.module#BonosAcreditadosPageModule' },
  { path: 'home-user', loadChildren: './pages/home-user/home-user.module#HomeUserPageModule' },
  { path: 'ejercicio-user', loadChildren: './pages/ejercicio-user/ejercicio-user.module#EjercicioUserPageModule' },
  { path: 'alimentacion-user', loadChildren: './pages/alimentacion-user/alimentacion-user.module#AlimentacionUserPageModule' },
  { path: 'mipeso-user', loadChildren: './pages/mipeso-user/mipeso-user.module#MipesoUserPageModule' },
  { path: 'diario-user', loadChildren: './pages/diario-user/diario-user.module#DiarioUserPageModule' },  { path: 'registro', loadChildren: './pages/registro/registro.module#RegistroPageModule' },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
