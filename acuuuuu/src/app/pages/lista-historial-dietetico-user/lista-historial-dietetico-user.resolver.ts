import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { DiarioDieteticoService } from 'src/app/services/diario-dietetico.service';


@Injectable()
export class DieteticoUserResolver implements Resolve<any> {

  constructor(private dieteticoServices: DiarioDieteticoService ) {}

  resolve(route: ActivatedRouteSnapshot) {
    const response = this.dieteticoServices.getDiarioDietetico();
    console.log('response', response);
    return response;
}
}
