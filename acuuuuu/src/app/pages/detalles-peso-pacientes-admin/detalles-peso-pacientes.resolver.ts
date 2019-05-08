import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve} from '@angular/router';
import { HistorialClinicoService } from 'src/app/services/historial-clinico.service';

@Injectable()
export class DetallesPesoResolver implements Resolve<any> {

constructor(public detallePesoService: HistorialClinicoService) { }

resolve(route: ActivatedRouteSnapshot) {

    return new Promise((resolve, reject) => {
        const itemId = route.paramMap.get('id');
        this.detallePesoService.getPesoId(itemId)
        .then(data => {
        data.id = itemId;
        resolve(data);
        }, err => {
        reject(err);
        });
    });
}
}
