import { DiarioDieteticoService } from 'src/app/services/diario-dietetico.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve} from '@angular/router';


@Injectable()
export class DetallesHistorialDieteticoResolver implements Resolve<any> {

    constructor(public historialDieteticoService: DiarioDieteticoService) { }

    resolve(route: ActivatedRouteSnapshot) {

        return new Promise((resolve, reject) => {
            const itemId = route.paramMap.get('id');
            this.historialDieteticoService.getDiarioDieteticoId(itemId)
                .then(data => {
                    data.id = itemId;
                    resolve(data);
                }, err => {
                    reject(err);
                });
        });
    }
}
