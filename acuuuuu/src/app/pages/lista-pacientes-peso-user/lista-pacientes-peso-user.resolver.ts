import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { HistorialClinicoService } from 'src/app/services/historial-clinico.service';

@Injectable()
export class ListaPesoUserResolver implements Resolve<any> {

    constructor(private firebaseService: HistorialClinicoService) {}

    resolve(route: ActivatedRouteSnapshot) {
    return this.firebaseService.getPeso();
    }
}
