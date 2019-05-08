import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { NuevaCitaService } from 'src/app/services/nueva-cita.service';

@Injectable()
export class CitasResolver implements Resolve<any> {

constructor(private citasServices: NuevaCitaService ) {}

resolve(route: ActivatedRouteSnapshot) {
    const response = this.citasServices.getCita();
    console.log('response', response);
    return response;
}
}
