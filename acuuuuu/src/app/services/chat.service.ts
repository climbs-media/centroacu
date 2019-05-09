import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private snapshotChangesSubscription: any;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth
  ) {
  }

  getContact() {
    return new Promise<any>((resolve, reject) => {
      this.snapshotChangesSubscription = this.afs.collection('/contacto/').snapshotChanges();
      resolve(this.snapshotChangesSubscription);
    });
  }


  getContactoId(mensajeId) {
    return new Promise<any>((resolve, reject) => {
      this.snapshotChangesSubscription = this.afs.doc<any>('/contacto/' + mensajeId).valueChanges()
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

  updateContacto(contactoKey, value) {
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('contacto').doc(contactoKey).set(value)
        .then(
          res => resolve(res),
          err => reject(err)
        );
    });
  }

  deleteContacto(empresaKey) {
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('contacto').doc(empresaKey).delete()
        .then(
          res => resolve(res),
          err => reject(err)
        );
    });
  }

  createContacto(value) {
    return new Promise<any>((resolve, reject) => {
    const currentUser = firebase.auth().currentUser;
      this.afs.collection('contacto').add({
        title: value.title,
        email: value.email,
        asunto: value.asunto,
        mensaje: value.mensaje,
        userId: currentUser.uid,
      })
        .then(
          res => resolve(res),
          err => reject(err)
        );
    });
  }

  encodeImageUri(imageUri, callback) {
    let c = document.createElement('canvas');
    let ctx = c.getContext('2d');
    let img = new Image();
    img.onload = function () {
      var aux:any = this;
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
          })
      })
    })
  }
  
}