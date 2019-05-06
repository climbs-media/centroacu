import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { HistorialClinicoService } from 'src/app/services/historial-clinico.service';



@Injectable()
export class AjustesResolver implements Resolve<any> {

  constructor(private ajustesServices: HistorialClinicoService  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.ajustesServices.getHistorialClinico();
  }
}
