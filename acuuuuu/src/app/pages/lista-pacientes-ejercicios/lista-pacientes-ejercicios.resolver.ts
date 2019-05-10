import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { AnadirEjercicioService } from 'src/app/services/añadir-ejercicio.service';

@Injectable()
export class EjercicioResolver implements Resolve<any> {

    constructor(private ejercicioServices: AnadirEjercicioService ) {}

    resolve(route: ActivatedRouteSnapshot) {
        const response = this.ejercicioServices.getAnadirEjercicio();
        console.log('response', response);
        return response;
}
}