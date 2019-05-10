import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { DiarioDieteticoService } from 'src/app/services/diario-dietetico.service';


@Injectable()
export class DieteticoResolver implements Resolve<any> {

  constructor(private dieteticoServices: DiarioDieteticoService ) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.dieteticoServices.getDiarioDieteticoAdmin();
  }
}
