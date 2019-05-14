import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { MenuCenasService } from 'src/app/services/menu-cenas.service';



@Injectable()
export class DietaCenasUserResolver implements Resolve<any> {

constructor(private dietaServices: MenuCenasService  ) {}

resolve(route: ActivatedRouteSnapshot) {
    return this.dietaServices.getMenuCena();
}
}
