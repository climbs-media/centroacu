import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { DiarioDieteticoService } from 'src/app/services/diario-dietetico.service';


@Injectable()
export class DieteticoResolver implements Resolve<any> {

  constructor(private dieteticoServices: DiarioDieteticoService ) {}

  resolve(route: ActivatedRouteSnapshot) {
    const response = this.dieteticoServices.getDiarioDieteticoAdmin();
    console.log('response', response);
    return response;
}
}
