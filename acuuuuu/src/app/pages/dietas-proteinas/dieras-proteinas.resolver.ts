import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';



@Injectable()
export class DietaProteinaResolver implements Resolve<any> {

  constructor(private dietaServices: MenuService  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.dietaServices.getMenuProteinaAdmin();
  }
}
