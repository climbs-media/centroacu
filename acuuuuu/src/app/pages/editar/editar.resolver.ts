import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import {HistorialClinicoService} from '../../services/historial-clinico.service';

@Injectable()
export class EditarResolver implements Resolve<any> {

constructor(public firebaseService: HistorialClinicoService) { }

resolve(route: ActivatedRouteSnapshot) {

    return new Promise((resolve, reject) => {
    const itemId = route.paramMap.get('id');
    this.firebaseService.getHistorialClinicoId(itemId)
    .then(data => {
        data.id = itemId;
        resolve(data);
    }, err => {
        reject(err);
    });
    });
}
}


