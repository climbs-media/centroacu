import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';



@Injectable()
export class ChatResolver implements Resolve<any> {

  constructor(private mensajeServices: ChatService ) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.mensajeServices.getContact();
  }
}
