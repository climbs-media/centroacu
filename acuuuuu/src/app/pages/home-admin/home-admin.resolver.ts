import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { HistorialClinicoService } from 'src/app/services/historial-clinico.service';



@Injectable()
export class HomeAdminResolver implements Resolve<any> {

  constructor(private homeAdminServices: HistorialClinicoService  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.homeAdminServices.getHistorialClinicoAdmin();
  }
}
