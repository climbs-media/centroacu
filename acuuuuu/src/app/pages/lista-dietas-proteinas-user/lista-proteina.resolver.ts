import { MenuService } from './../../services/menu.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { MenuHipocaloricoService } from 'src/app/services/menu-hipocalorico.service';



@Injectable()
export class DietaProteinaUserResolver implements Resolve<any> {

constructor(private dietaServices: MenuService  ) {}

resolve(route: ActivatedRouteSnapshot) {
    return this.dietaServices.getMenuProteina();
}
}
