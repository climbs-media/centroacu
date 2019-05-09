import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { HistorialClinicoService } from 'src/app/services/historial-clinico.service';

@Injectable()
export class EjercicioResolver implements Resolve<any> {

    constructor(private ejercicioServices: HistorialClinicoService ) {}

    resolve(route: ActivatedRouteSnapshot) {
        const response = this.ejercicioServices.getHistorialClinicoAdmin();
        console.log('response', response);
        return response;
}
}