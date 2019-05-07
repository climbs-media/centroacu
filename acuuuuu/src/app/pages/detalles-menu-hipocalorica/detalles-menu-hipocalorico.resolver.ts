import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve} from '@angular/router';
import { MenuHipocaloricoService } from 'src/app/services/menu-hipocalorico.service';

@Injectable()
export class DetallesMenuHipoResolver implements Resolve<any> {

constructor(public detalleMenuHipoService: MenuHipocaloricoService) { }

resolve(route: ActivatedRouteSnapshot) {

    return new Promise((resolve, reject) => {
        const itemId = route.paramMap.get('id');
        this.detalleMenuHipoService.getMenuHipocaloricoId(itemId)
        .then(data => {
        data.id = itemId;
        resolve(data);
        }, err => {
        reject(err);
        });
    });
}
}
