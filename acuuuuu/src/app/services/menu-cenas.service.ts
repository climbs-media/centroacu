import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class MenuCenasService {

  private snapshotChangesSubscription: any;
  
  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth
  ) {}

  getMenuCenaAdmin() {
    return new Promise<any>((resolve, reject) => {
      this.snapshotChangesSubscription = this.afs.
        collection('menu-cena').snapshotChanges();
      resolve(this.snapshotChangesSubscription);
    });
  }

  getMenuCena() {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.user.subscribe(currentUser => {
        if (currentUser) {
            this.snapshotChangesSubscription = this.afs.
            collection('menu-cena', ref => ref.where('userId', '==', currentUser.uid)).snapshotChanges();
            resolve(this.snapshotChangesSubscription);
        }
      });
    });
  }

  getMenuCenaId(menuId) {
    return new Promise<any>((resolve, reject) => {
      this.snapshotChangesSubscription = this.afs.doc<any>('/menu-cena/' + menuId).valueChanges()
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

  actualizarMenuCena(menuKey, value) {
    return new Promise<any>((resolve, reject) => {
      const currentUser = firebase.auth().currentUser;
      this.afs.collection('menu-cena').doc(menuKey).set(value)
      .then(
        res => resolve(res),
        err => reject(err)
      );
    });
  }

  borrarMenuCena(menuKey) {
    return new Promise<any>((resolve, reject) => {
      const currentUser = firebase.auth().currentUser;
      this.afs.collection('menu-cena').doc(menuKey).delete()
      .then(
        res => resolve(res),
        err => reject(err)
      );
    });
  }

  crearMenuCena(value) {
    return new Promise<any>((resolve, reject) => {
      const currentUser = firebase.auth().currentUser;
      this.afs.collection('menu-cena').add({
        nombreMenu: value.nombreMenu,
        cenaLunes: value.cenaLunes,
        cenaMartes: value.cenaMartes,
        cenaMiercoles: value.cenaMiercoles,
        cenaJueves: value.cenaJueves,
        cenaViernes: value.cenaViernes,
        cenaSabado: value.cenaSabado,
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