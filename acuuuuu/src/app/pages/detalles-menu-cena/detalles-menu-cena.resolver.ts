import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve} from '@angular/router';
import { MenuCenasService } from 'src/app/services/menu-cenas.service';

@Injectable()
export class DetallesMenuCenaResolver implements Resolve<any> {

constructor(public detalleMenuCenaService: MenuCenasService) { }

resolve(route: ActivatedRouteSnapshot) {

    return new Promise((resolve, reject) => {
        const itemId = route.paramMap.get('id');
        this.detalleMenuCenaService.getMenuCenaId(itemId)
        .then(data => {
        data.id = itemId;
        resolve(data);
        }, err => {
        reject(err);
        });
    });
}
}
