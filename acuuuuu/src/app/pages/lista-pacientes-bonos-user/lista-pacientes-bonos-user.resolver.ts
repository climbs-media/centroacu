import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { HistorialClinicoService } from 'src/app/services/historial-clinico.service';

@Injectable()
export class BonosUserResolver implements Resolve<any> {

constructor(private bonosServices: HistorialClinicoService ) {}

resolve(route: ActivatedRouteSnapshot) {
    const response = this.bonosServices.getHistorialClinico();
    console.log('response', response);
    return response;
}
}
