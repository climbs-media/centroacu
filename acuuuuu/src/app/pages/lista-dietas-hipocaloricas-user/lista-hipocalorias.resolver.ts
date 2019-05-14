import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { MenuHipocaloricoService } from 'src/app/services/menu-hipocalorico.service';



@Injectable()
export class DietaHipocaloricaUserResolver implements Resolve<any> {

constructor(private dietaServices: MenuHipocaloricoService  ) {}

resolve(route: ActivatedRouteSnapshot) {
    return this.dietaServices.getMenuHipocalorico();
}
}
