import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class BonoCitasService {

  private snapshotChangesSubscription: any;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth
  ){}

  getBono() {
    return new Promise<any>((resolve, reject) => {
      this.snapshotChangesSubscription = this.afs.collection('bono-cita').snapshotChanges();
      resolve(this.snapshotChangesSubscription);
    });
  }

  getBonoCita(Id) {
    return new Promise<any>((resolve, reject) => {
      this.snapshotChangesSubscription = this.afs.doc<any>('/bono-cita/' + Id).valueChanges()
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

  actualizarBono(bonoKey, value){
    return new Promise<any>((resolve, reject) => {
      const currentUser = firebase.auth().currentUser;
      this.afs.collection('bono-cita').doc(bonoKey).set(value)
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  borrarBono(bonoKey){
    return new Promise<any>((resolve, reject) => {
      const currentUser = firebase.auth().currentUser;
      this.afs.collection('bono-cita').doc(bonoKey).delete()
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  crearBonoCita(value){
    return new Promise<any>((resolve, reject) => {
      const currentUser = firebase.auth().currentUser;
      this.afs.collection('bono-cita').add({
        nombreCliente: value.nombreCliente,
        bonoOcho: value.bonoOcho,
        bonoCuatro: value.bonoCuatro,
        bonoManual: value.bonoManual,
        fechaBono: value.fechaBono,
        bonoCitas: value.bonoCitas,
        citasRestantes: value.citasRestantes,
        userId: currentUser.uid,
        image: value.image
      })
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
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
  };

  uploadImage(imageURI, randomId){
    return new Promise<any>((resolve, reject) => {
      const storageRef = firebase.storage().ref();
      const imageRef = storageRef.child('image').child(randomId);
      this.encodeImageUri(imageURI, function(image64){
        imageRef.putString(image64, 'data_url')
        .then(snapshot => {
          snapshot.ref.getDownloadURL()
          .then(res => resolve(res))
        }, err => {
          reject(err);
        });
      });
    });
  }

}
