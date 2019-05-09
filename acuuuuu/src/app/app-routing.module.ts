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
  // tslint:disable-next-line:max-line-length
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
  { path: 'editar/:id', loadChildren: './pages/editar/editar.module#EditarPageModule' },
  { path: 'bonos-acreditados', loadChildren: './pages/bonos-acreditados/bonos-acreditados.module#BonosAcreditadosPageModule' },
  { path: 'home-user', loadChildren: './pages/home-user/home-user.module#HomeUserPageModule' },
  { path: 'ejercicio-user', loadChildren: './pages/ejercicio-user/ejercicio-user.module#EjercicioUserPageModule' },
  { path: 'alimentacion-user', loadChildren: './pages/alimentacion-user/alimentacion-user.module#AlimentacionUserPageModule' },
  { path: 'mipeso-user', loadChildren: './pages/mipeso-user/mipeso-user.module#MipesoUserPageModule' },
  { path: 'diario-user', loadChildren: './pages/diario-user/diario-user.module#DiarioUserPageModule' },
  { path: 'registro', loadChildren: './pages/registro/registro.module#RegistroPageModule' },
  // tslint:disable-next-line:max-line-length
  { path: 'popover-historial-dietetico', loadChildren: './pages/popover-historial-dietetico/popover-historial-dietetico.module#PopoverHistorialDieteticoPageModule' },
  { path: 'cliente-historial', loadChildren: './pages/cliente-historial/cliente-historial.module#ClienteHistorialPageModule' },
  { path: 'chat', loadChildren: './pages/chat/chat.module#ChatPageModule' },
  { path: 'historial-fisico', loadChildren: './pages/historial-fisico/historial-fisico.module#HistorialFisicoPageModule' },
  { path: 'menu-proteina', loadChildren: './pages/menu-proteina/menu-proteina.module#MenuProteinaPageModule' },
  // tslint:disable-next-line:max-line-length
  { path: 'detalles-menu-proteina/:id', loadChildren: './pages/detalles-menu-proteina/detalles-menu-proteina.module#DetallesMenuProteinaPageModule' },
  { path: 'menu-hipocalorica', loadChildren: './pages/menu-hipocalorica/menu-hipocalorica.module#MenuHipocaloricaPageModule' },
  // tslint:disable-next-line:max-line-length
  { path: 'detalles-menu-hipocalorica/:id', loadChildren: './pages/detalles-menu-hipocalorica/detalles-menu-hipocalorica.module#DetallesMenuHipocaloricaPageModule' },
  { path: 'editar-peso/:id', loadChildren: './pages/editar-peso/editar-peso.module#EditarPesoPageModule' },
  { path: 'login-paciente', loadChildren: './pages/login-paciente/login-paciente.module#LoginPacientePageModule' },
  { path: 'diario-dietetico', loadChildren: './pages/diario-dietetico/diario-dietetico.module#DiarioDieteticoPageModule' },
  { path: 'historiales-clinicos', loadChildren: './pages/historiales-clinicos/historiales-clinicos.module#HistorialesClinicosPageModule' },
  { path: 'citas-admin', loadChildren: './pages/citas-admin/citas-admin.module#CitasAdminPageModule' },
  // tslint:disable-next-line:max-line-length
  { path: 'citas-pacientes-admin/:id', loadChildren: './pages/citas-pacientes-admin/citas-pacientes-admin.module#CitasPacientesAdminPageModule' },
  { path: 'lista-paciente-peso', loadChildren: './pages/lista-paciente-peso/lista-paciente-peso.module#ListaPacientePesoPageModule' },
  // tslint:disable-next-line:max-line-length
  { path: 'detalles-peso-pacientes-admin/:id', loadChildren: './pages/detalles-peso-pacientes-admin/detalles-peso-pacientes-admin.module#DetallesPesoPacientesAdminPageModule' },
  // tslint:disable-next-line:max-line-length
  { path: 'crear-diario-dietetico', loadChildren: './pages/crear-diario-dietetico/crear-diario-dietetico.module#CrearDiarioDieteticoPageModule' },
  // tslint:disable-next-line:max-line-length
  { path: 'diario-dietetico-admin', loadChildren: './pages/diario-dietetico-admin/diario-dietetico-admin.module#DiarioDieteticoAdminPageModule' },
  { path: 'detalles-diario/:id', loadChildren: './pages/detalles-diario/detalles-diario.module#DetallesDiarioPageModule' },
  // tslint:disable-next-line:max-line-length
  { path: 'lista-pacientes-ejercicios', loadChildren: './pages/lista-pacientes-ejercicios/lista-pacientes-ejercicios.module#ListaPacientesEjerciciosPageModule' },
  // tslint:disable-next-line:max-line-length
  { path: 'detalles-ejercicios-pacientes-admin/:id', loadChildren: './pages/detalles-ejercicios-pacientes-admin/detalles-ejercicios-pacientes-admin.module#DetallesEjerciciosPacientesAdminPageModule' },  { path: 'dietas-pacientes', loadChildren: './pages/dietas-pacientes/dietas-pacientes.module#DietasPacientesPageModule' },
  { path: 'lista-mensajes-admin', loadChildren: './pages/lista-mensajes-admin/lista-mensajes-admin.module#ListaMensajesAdminPageModule' },













];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
