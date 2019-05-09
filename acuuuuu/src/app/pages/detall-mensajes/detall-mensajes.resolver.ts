import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';



@Injectable()
export class ChatResolver implements Resolve<any> {

constructor(private mensajesServices: ChatService ) {}

resolve(route: ActivatedRouteSnapshot) {

    return new Promise((resolve, reject) => {
    const itemId = route.paramMap.get('id');
    this.mensajesServices.getContactoId(itemId)
    .then(data => {
        data.id = itemId;
        resolve(data);
    }, err => {
        reject(err);
    });
    });
}
}