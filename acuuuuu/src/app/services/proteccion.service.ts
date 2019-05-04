import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class ProteccionService {

  private snapshotChangesSubscription: any;


  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth
  ){}

  getProteccion() {
    return new Promise<any>((resolve, reject) => {
      this.snapshotChangesSubscription = this.afs.collection('proteccion').snapshotChanges();
      resolve(this.snapshotChangesSubscription);
    });
  }

  getProteccionId(Id) {
    return new Promise<any>((resolve, reject) => {
      this.snapshotChangesSubscription = this.afs.doc<any>('/proteccion/' + Id).valueChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        }, err => {
          reject(err);
        });
    });
  }


  unsubscribeOnLogOut(){
    // remember to unsubscribe from the snapshotChanges
    this.snapshotChangesSubscription.unsubscribe();
  }

  actualizarProteccion(proteccionKey, value){
    return new Promise<any>((resolve, reject) => {
      const currentUser = firebase.auth().currentUser;
      this.afs.collection('proteccion').doc(proteccionKey).set(value)
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  borrarProteccion(proteccionKey) {
    return new Promise<any>((resolve, reject) => {
      const currentUser = firebase.auth().currentUser;
      this.afs.collection('proteccion').doc(proteccionKey).delete()
      .then(
        res => resolve(res),
        err => reject(err)
      );
    });
  }

  crearProteccion(value) {
    return new Promise<any>((resolve, reject) => {
      const currentUser = firebase.auth().currentUser;
      this.afs.collection('proteccion').add({
        nombre: value.nombre,
        fecha: value.fecha,
        identidad: value.identidad,
        userId: currentUser.uid,
      })
      .then(
        res => resolve(res),
        err => reject(err)
      );
    });
  }



}
