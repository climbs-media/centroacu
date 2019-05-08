import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { DiarioDieteticoService } from 'src/app/services/diario-dietetico.service';

@Injectable()
export class DiarioResolver implements Resolve<any> {

constructor(private firebaseService: DiarioDieteticoService) {}

resolve(route: ActivatedRouteSnapshot) {
    return this.firebaseService.getDiarioDietetico();
}
}
