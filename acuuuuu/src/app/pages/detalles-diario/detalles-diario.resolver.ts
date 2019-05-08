import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve} from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { DiarioDieteticoService } from 'src/app/services/diario-dietetico.service';

@Injectable()
export class DetallesDiarioResolver implements Resolve<any> {

constructor(public diarioService: DiarioDieteticoService) { }

resolve(route: ActivatedRouteSnapshot) {

    return new Promise((resolve, reject) => {
        const itemId = route.paramMap.get('id');
        this.diarioService.getDiarioDieteticoId(itemId)
        .then(data => {
        data.id = itemId;
        resolve(data);
        }, err => {
        reject(err);
        });
    });
}
}