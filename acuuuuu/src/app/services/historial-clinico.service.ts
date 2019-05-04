import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class HistorialClinicoService {
  private snapshotChangesSubscription: any;


  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth
  ) {}

  getHistorialClinicoAdmin() {
    return new Promise<any>((resolve, reject) => {
      this.snapshotChangesSubscription = this.afs.
        collection('historial-clinico').snapshotChanges();
      resolve(this.snapshotChangesSubscription);
    });
  }
  
  getHistorialClinico() {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.user.subscribe(currentUser => {
        if (currentUser) {
            this.snapshotChangesSubscription = this.afs.
            collection('historial-clinico', ref => ref.where('userId', '==', currentUser.uid)).snapshotChanges();
            resolve(this.snapshotChangesSubscription);
        }
      });
    });
  }


  unsubscribeOnLogOut() {
    // remember to unsubscribe from the snapshotChanges
    this.snapshotChangesSubscription.unsubscribe();
  }

  actualizarHistorialClinico(historialClinicoKey, value) {
    return new Promise<any>((resolve, reject) => {
      const currentUser = firebase.auth().currentUser;
      this.afs.collection('historial-clinico').doc(historialClinicoKey).set(value)
      .then(
        res => resolve(res),
        err => reject(err)
      );
    });
  }

  borrarHistorialClinico(historialClinicoKey) {
    return new Promise<any>((resolve, reject) => {
      const currentUser = firebase.auth().currentUser;
      this.afs.collection('historial-clinico').doc(historialClinicoKey).delete()
      .then(
        res => resolve(res),
        err => reject(err)
      );
    });
  }

  crearHistorialClinico(value) {
    return new Promise<any>((resolve, reject) => {
      const currentUser = firebase.auth().currentUser;
      this.afs.collection('historial-clinico').add({
        nombreApellido: value.nombreApellido,
        fechaNacimiento: value.fechaNacimiento,
        ciudad: value.ciudad,
        correo: value.correo,
        telefono: value.telefono,
        profesion: value.profesion,
        motivoConsulta: value.motivoConsulta,
        interNombre: value.interNombre,
        enfermedades: value.enfermedades,
        familiares: value.familiares,
        numeroHistorial: value.numeroHistorial,
        fecha: value.fecha,
        userId: currentUser.uid,
      })
      .then(
        res => resolve(res),
        err => reject(err)
      );
    });
  }

  encodeImageUri(imageUri, callback) {
    const c = document.createElement('canvas');
    const ctx = c.getContext('2d');
    const img = new Image();
    img.onload = function () {
      const aux: any = this;
      c.width = aux.width;
      c.height = aux.height;
      ctx.drawImage(img, 0, 0);
      const dataURL = c.toDataURL('image/jpeg');
      callback(dataURL);
    };
    img.src = imageUri;
  }

  uploadImage(imageURI, randomId){
    return new Promise<any>((resolve, reject) => {
      const storageRef = firebase.storage().ref();
      const imageRef = storageRef.child('image').child(randomId);
      this.encodeImageUri(imageURI, function(image64){
        imageRef.putString(image64, 'data_url')
        .then(snapshot => {
          snapshot.ref.getDownloadURL()
          .then(res => resolve(res));
        }, err => {
          reject(err);
        });
      });
    });
  }

}