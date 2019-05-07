import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { HistorialFisicoService } from 'src/app/services/historial-fisico.service';

@Injectable()
export class HistoricoFisicoResolver implements Resolve<any> {

constructor(private firebaseService: HistorialFisicoService) {}

resolve(route: ActivatedRouteSnapshot) {
    return this.firebaseService.getHistorialFisico();
}
}
