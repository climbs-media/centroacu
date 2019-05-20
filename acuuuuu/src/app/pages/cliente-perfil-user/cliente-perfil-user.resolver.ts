import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { HistorialClinicoService } from 'src/app/services/historial-clinico.service';
import { BonoCitasService } from 'src/app/services/bono-citas.service';

@Injectable()
export class ClientePerfilUserResolver implements Resolve<any> {

  constructor(private firebaseService: HistorialClinicoService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.firebaseService.getHistorialClinico();
  }
}
