import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AgregarClienteService {

  private snapshotChangesSubscription: any;


  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth
  ) {}

  getAnadirCliente() {
    return new Promise<any>((resolve, reject) => {
      this.snapshotChangesSubscription = this.afs.collection('anadir-cliente').snapshotChanges();
      resolve(this.snapshotChangesSubscription);
    });
  }

  getAnadirClienteId(Id) {
    return new Promise<any>((resolve, reject) => {
      this.snapshotChangesSubscription = this.afs.doc<any>('/anadir-cliente/' + Id).valueChanges()
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

  actualizarAnadirCliente(anadirClienteKey, value) {
    return new Promise<any>((resolve, reject) => {
      const currentUser = firebase.auth().currentUser;
      this.afs.collection('anadir-cliente').doc(anadirClienteKey).set(value)
      .then(
        res => resolve(res),
        err => reject(err)
      );
    });
  }

  borrarAnadirCliente(anadirClienteKey) {
    return new Promise<any>((resolve, reject) => {
      const currentUser = firebase.auth().currentUser;
      this.afs.collection('anadir-cliente').doc(anadirClienteKey).delete()
      .then(
        res => resolve(res),
        err => reject(err)
      );
    });
  }

  crearAnadirCliente(value) {
    return new Promise<any>((resolve, reject) => {
      const currentUser = firebase.auth().currentUser;
      this.afs.collection('anadir-cliente').add({
        nombreApellido: value.nombreApellido,
        fechaNacimiento: value.fechaNacimiento,
        ciudad: value.ciudad, 
        correo: value.correo,
        telefono: value.telefono,
        profesion: value.profesion,
        motivoConsulta: value.motivoConsulta,
        referencia: value.referencia,
        altura: value.altura,
        userId: currentUser.uid,
      })
      .then(
        res => resolve(res),
        err => reject(err)
      );
    });
  }

}
