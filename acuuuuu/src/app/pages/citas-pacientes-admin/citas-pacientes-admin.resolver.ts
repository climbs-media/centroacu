import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { NuevaCitaService } from 'src/app/services/nueva-cita.service';

@Injectable()
export class CitasPacientesResolver implements Resolve<any> {

constructor(public firebaseService: NuevaCitaService) { }

resolve(route: ActivatedRouteSnapshot) {

    return new Promise((resolve, reject) => {
    const itemId = route.paramMap.get('id');
    this.firebaseService.getCitaId(itemId)
    .then(data => {
        data.id = itemId;
        resolve(data);
    }, err => {
        reject(err);
    });
    });
}
}


