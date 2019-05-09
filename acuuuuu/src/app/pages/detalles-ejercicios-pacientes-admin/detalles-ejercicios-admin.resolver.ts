import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve} from '@angular/router';
import { AnadirEjercicioService } from 'src/app/services/añadir-ejercicio.service';

@Injectable()
export class DetallesEjerciciosResolver implements Resolve<any> {

constructor(public detallesEjercicioService: AnadirEjercicioService) { }

resolve(route: ActivatedRouteSnapshot) {

    return new Promise((resolve, reject) => {
        const itemId = route.paramMap.get('id');
        this.detallesEjercicioService.getAnadirEjercicioId(itemId)
        .then(data => {
        data.id = itemId;
        resolve(data);
        }, err => {
        reject(err);
        });
    });
}
}
