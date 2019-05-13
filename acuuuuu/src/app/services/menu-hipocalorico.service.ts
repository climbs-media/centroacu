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
        numeroMenu: value.numeroMenu,
        semanas: value.semanas,
        image: value.image,
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

  uploadImage(imageURI, randomId) {
    return new Promise<any>((resolve, reject) => {
      const storageRef = firebase.storage().ref();
      const imageRef = storageRef.child('image').child(randomId);
      this.encodeImageUri(imageURI, function(image64) {
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