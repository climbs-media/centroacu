import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { NuevaCitaService } from 'src/app/services/nueva-cita.service';


@Injectable()
export class DetallesCitasResolver implements Resolve<any> {

constructor(private citasServices: NuevaCitaService ) {}

resolve(route: ActivatedRouteSnapshot) {

    return new Promise((resolve, reject) => {
    const itemId = route.paramMap.get('id');
    this.citasServices.getCitaId(itemId)
    .then(data => {
        data.id = itemId;
        resolve(data);
    }, err => {
        reject(err);
    });
    });
}
}