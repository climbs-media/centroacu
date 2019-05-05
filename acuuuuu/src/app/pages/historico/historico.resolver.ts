import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { NuevaCitaService } from 'src/app/services/nueva-cita.service';

@Injectable()
export class HistoricoResolver implements Resolve<any> {

  constructor(private firebaseService: NuevaCitaService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.firebaseService.getCitaPaciente();
  }
}
