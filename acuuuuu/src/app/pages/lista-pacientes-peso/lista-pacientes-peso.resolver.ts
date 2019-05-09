import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { NuevaCitaService } from 'src/app/services/nueva-cita.service';
import { HistorialClinicoService } from 'src/app/services/historial-clinico.service';

@Injectable()
export class ListaPesoResolver implements Resolve<any> {

    constructor(private firebaseService: HistorialClinicoService) {}

    resolve(route: ActivatedRouteSnapshot) {
    return this.firebaseService.getPesoAdmin();
    }
}
