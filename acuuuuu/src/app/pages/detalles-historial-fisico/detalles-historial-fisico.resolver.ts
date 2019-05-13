import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve} from '@angular/router';
import { HistorialFisicoService } from 'src/app/services/historial-fisico.service';

@Injectable()
export class DetallesFisicoResolver implements Resolve<any> {

constructor(public detallesFisicoService: HistorialFisicoService) { }

resolve(route: ActivatedRouteSnapshot) {

    return new Promise((resolve, reject) => {
        const itemId = route.paramMap.get('id');
        this.detallesFisicoService.getHistorialFisicoId(itemId)
        .then(data => {
        data.id = itemId;
        resolve(data);
        }, err => {
        reject(err);
        });
    });
}
}
