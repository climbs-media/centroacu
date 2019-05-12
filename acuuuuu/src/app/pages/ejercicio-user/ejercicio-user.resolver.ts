import { NuevaCitaService } from 'src/app/services/nueva-cita.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { AnadirEjercicioService } from 'src/app/services/añadir-ejercicio.service';

@Injectable()
export class EjercicioUserResolver implements Resolve<any> {

  constructor(private citaServices: AnadirEjercicioService  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.citaServices.getEjercicioPaciente();
  }
}
