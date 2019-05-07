import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private snapshotChangesSubscription: any;
  
  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth
  ) {}

  getMenuProteinaAdmin() {
    return new Promise<any>((resolve, reject) => {
      this.snapshotChangesSubscription = this.afs.
        collection('menu-proteina').snapshotChanges();
      resolve(this.snapshotChangesSubscription);
    });
  }

  getMenuProteina() {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.user.subscribe(currentUser => {
        if (currentUser) {
            this.snapshotChangesSubscription = this.afs.
            collection('menu-proteina', ref => ref.where('userId', '==', currentUser.uid)).snapshotChanges();
            resolve(this.snapshotChangesSubscription);
        }
      });
    });
  }

  getMenuProteinaId(menuId) {
    return new Promise<any>((resolve, reject) => {
      this.snapshotChangesSubscription = this.afs.doc<any>('/menu-proteina/' + menuId).valueChanges()
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

  actualizarMenuProteina(menuKey, value) {
    return new Promise<any>((resolve, reject) => {
      const currentUser = firebase.auth().currentUser;
      this.afs.collection('menu-proteina').doc(menuKey).set(value)
      .then(
        res => resolve(res),
        err => reject(err)
      );
    });
  }

  borrarMenuProteina(menuKey) {
    return new Promise<any>((resolve, reject) => {
      const currentUser = firebase.auth().currentUser;
      this.afs.collection('menu-proteina').doc(menuKey).delete()
      .then(
        res => resolve(res),
        err => reject(err)
      );
    });
  }

  crearMenuProteina(value) {
    return new Promise<any>((resolve, reject) => {
      const currentUser = firebase.auth().currentUser;
      this.afs.collection('menu-proteina').add({
        desayuno: value.desayuno,
        menuLunes: value.menuLunes,
        menuMartes: value.menuMartes,
        menuMiercoles: value.menuaMiercoles,
        menuJueves: value.menuJueves,
        menuViernes: value.menuViernes,
        menuSabado: value.menuSabado,
        menuDomingo: value.menuDomingo,
        userId: currentUser.uid,
      })
      .then(
        res => resolve(res),
        err => reject(err)
      );
    });
  }
}

