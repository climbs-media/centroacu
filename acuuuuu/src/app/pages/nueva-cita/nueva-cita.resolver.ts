import { NuevaCitaService } from 'src/app/services/nueva-cita.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';



@Injectable()
export class CitaResolver implements Resolve<any> {

  constructor(private citaServices: NuevaCitaService  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.citaServices.getCitaPaciente();
  }
}
