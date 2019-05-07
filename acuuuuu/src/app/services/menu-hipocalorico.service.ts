import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class MenuHipocaloricoService {

  private snapshotChangesSubscription: any;
  
  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth
  ) {}

  getMenuHipocaloricoAdmin() {
    return new Promise<any>((resolve, reject) => {
      this.snapshotChangesSubscription = this.afs.
        collection('menu-hipocalorico').snapshotChanges();
      resolve(this.snapshotChangesSubscription);
    });
  }

  getMenuHipocalorico() {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.user.subscribe(currentUser => {
        if (currentUser) {
            this.snapshotChangesSubscription = this.afs.
            collection('menu-hipocalorico', ref => ref.where('userId', '==', currentUser.uid)).snapshotChanges();
            resolve(this.snapshotChangesSubscription);
        }
      });
    });
  }

  getMenuHipocaloricoId(menuId) {
    return new Promise<any>((resolve, reject) => {
      this.snapshotChangesSubscription = this.afs.doc<any>('/menu-hipocalorico/' + menuId).valueChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        }, err => {
          reject(err);
        });
    });
  }


  unsubscribeOnLogOut() {
    // remember to unsubscribe from the snapshotChanges
    this.snapshotChangesSubscription.unsubscribe();
  }

  actualizarMenuHipocalorico(menuKey, value) {
    return new Promise<any>((resolve, reject) => {
      const currentUser = firebase.auth().currentUser;
      this.afs.collection('menu-hipocalorico').doc(menuKey).set(value)
      .then(
        res => resolve(res),
        err => reject(err)
      );
    });
  }

  borrarMenuHipocalorico(menuKey) {
    return new Promise<any>((resolve, reject) => {
      const currentUser = firebase.auth().currentUser;
      this.afs.collection('menu-hipocalorico').doc(menuKey).delete()
      .then(
        res => resolve(res),
        err => reject(err)
      );
    });
  }

  crearMenuHipocalorico(value) {
    return new Promise<any>((resolve, reject) => {
      const currentUser = firebase.auth().currentUser;
      this.afs.collection('menu-hipocalorico').add({
        nombreMenu: value.nombreMenu,
        desayuno: value.desayuno,
        desayunoDos: value.desayunoDos,
        comidaLunes: value.comidaLunes,
        cenaLunes: value.cenaLunes,
        comidaMartes: value.comidaMartes,
        cenaMartes: value.cenaMartes,
        comidaMiercoles: value.comidaMiercoles,
        cenaMiercoles: value.cenaMiercoles,
        comidaJueves: value.comidaJueves,
        cenaJueves: value.cenaJueves,
        comidaViernes: value.comidaViernes,
        cenaViernes: value.cenaViernes,
        comidaSabado: value.comidaSabado,
        cenaSabado: value.cenaSabado,
        comidaDomingo: value.comidaDomingo,
        cenaDomingo: value.cenaDomingo,
        userId: currentUser.uid,
      })
      .then(
        res => resolve(res),
        err => reject(err)
      );
    });
  }
}