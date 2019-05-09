import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { HistorialClinicoService } from 'src/app/services/historial-clinico.service';


@Injectable()
export class DetallesResolver implements Resolve<any> {

constructor(private mensajesServices: HistorialClinicoService ) {}

resolve(route: ActivatedRouteSnapshot) {

    return new Promise((resolve, reject) => {
    const itemId = route.paramMap.get('id');
    this.mensajesServices.getHistorialClinicoId(itemId)
    .then(data => {
        data.id = itemId;
        resolve(data);
    }, err => {
        reject(err);
    });
    });
}
}