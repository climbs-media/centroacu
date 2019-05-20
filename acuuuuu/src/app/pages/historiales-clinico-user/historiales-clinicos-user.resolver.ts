import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { HistorialClinicoService } from 'src/app/services/historial-clinico.service';

@Injectable()
export class HistorialesUserResolver implements Resolve<any> {

  constructor(private historialServices: HistorialClinicoService ) {}

  resolve(route: ActivatedRouteSnapshot) {
    const response = this.historialServices.getHistorialClinico();
    console.log('response', response);
    return response;
  }
}
