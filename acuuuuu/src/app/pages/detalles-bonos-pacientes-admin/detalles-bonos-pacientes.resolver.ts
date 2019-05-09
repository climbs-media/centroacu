import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {HistorialClinicoService} from '../../services/historial-clinico.service';


@Injectable()
export class DetallesBonoResolver implements Resolve<any> {

    constructor(public diarioService: HistorialClinicoService) { }

    resolve(route: ActivatedRouteSnapshot) {

        return new Promise((resolve, reject) => {
            const itemId = route.paramMap.get('id');
            this.diarioService.getHistorialClinicoId(itemId)
                .then(data => {
                    data.id = itemId;
                    resolve(data);
                }, err => {
                    reject(err);
                });
        });
    }
}
