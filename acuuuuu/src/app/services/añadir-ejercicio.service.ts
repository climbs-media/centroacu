import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AnadirEjercicioService {

  private snapshotChangesSubscription: any;


  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth
  ) {}

  getAnadirEjercicio() {
    return new Promise<any>((resolve, reject) => {
      this.snapshotChangesSubscription = this.afs.collection('anadir-ejercicio').snapshotChanges();
      resolve(this.snapshotChangesSubscription);
    });
  }

  getEjercicioPaciente() {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.user.subscribe(currentUser => {
        if (currentUser) {
            this.snapshotChangesSubscription = this.afs.
            collection('anadir-ejercicio', ref => ref.where('userId', '==', currentUser.uid)).snapshotChanges();
            resolve(this.snapshotChangesSubscription);
        }
      });
    });
  }

  getAnadirEjercicioId(Id) {
    return new Promise<any>((resolve, reject) => {
      this.snapshotChangesSubscription = this.afs.doc<any>('/anadir-ejercicio/' + Id).valueChanges()
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

  actualizarAnadirEjercicio(anadirEjercicioKey, value) {
    return new Promise<any>((resolve, reject) => {
      const currentUser = firebase.auth().currentUser;
      this.afs.collection('anadir-ejercicio').doc(anadirEjercicioKey).set(value)
      .then(
        res => resolve(res),
        err => reject(err)
      );
    });
  }

  borrarAnadirEjercicio(anadirEjercicioKey) {
    return new Promise<any>((resolve, reject) => {
      const currentUser = firebase.auth().currentUser;
      this.afs.collection('anadir-ejercicio').doc(anadirEjercicioKey).delete()
      .then(
        res => resolve(res),
        err => reject(err)
      );
    });
  }

  crearAnadirEjercicio(value) {
    return new Promise<any>((resolve, reject) => {
      const currentUser = firebase.auth().currentUser;
      this.afs.collection('anadir-ejercicio').add({
        titulo: value.titulo,
        descripcion: value.descripcion,
        horaInicio: value.horaInicio,
        horaFinal: value.horaFinal,
        fecha: value.fecha,
        userId: currentUser.uid,
      })
      .then(
        res => resolve(res),
        err => reject(err)
      );
    });
  }

}
