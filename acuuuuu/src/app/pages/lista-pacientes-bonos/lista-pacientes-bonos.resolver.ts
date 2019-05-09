import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { HistorialClinicoService } from 'src/app/services/historial-clinico.service';

@Injectable()
export class BonosResolver implements Resolve<any> {

constructor(private bonosServices: HistorialClinicoService ) {}

resolve(route: ActivatedRouteSnapshot) {
    const response = this.bonosServices.getHistorialClinicoAdmin();
    console.log('response', response);
    return response;
}
}
