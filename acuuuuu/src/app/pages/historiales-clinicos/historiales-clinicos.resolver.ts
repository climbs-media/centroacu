import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { HistorialClinicoService } from 'src/app/services/historial-clinico.service';

@Injectable()
export class HistorialesResolver implements Resolve<any> {

  constructor(private historialServices: HistorialClinicoService ) {}

  resolve(route: ActivatedRouteSnapshot) {
    const response = this.historialServices.getHistorialClinicoAdmin();
    console.log('response', response);
    return response;
  }
}
