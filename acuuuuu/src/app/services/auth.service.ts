import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {UserInterface} from '../pages/models/user';
import { FirebaseService } from './firebase.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private firebaseService: FirebaseService,
    public afAuth: AngularFireAuth,
    private afsAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) {}

  doRegistrar(value) {
  return new Promise<any>((resolve, reject) => {
    firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
    .then(
      res => resolve(res),
      err => reject(err));
  })
  }

  doRegistrarPaciente(value) {
    return new Promise((resolve, reject) => {
      this.afsAuth.auth.createUserWithEmailAndPassword(value.email, value.password)
        .then(userData => {
          resolve(userData),
            this.updateUserData(userData.user)
        }).catch(err => console.log(reject(err)));
    });
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`pacientes/${user.uid}`);
    const data: UserInterface = {
      id: user.uid,
      email: user.email,
      roles: {
        pacientes: true,
      }
    };
    return userRef.set(data, { merge: true });
  }
  isAuth() {
    return this.afsAuth.authState.pipe(map(auth => auth));
  }

  isUserAdmin(userUid) {
    return this.afs.doc<UserInterface>(`admin/${userUid}`).valueChanges();
  }
  isUserPacientes(userUid) {
    return this.afs.doc<UserInterface>(`pacientes/${userUid}`).valueChanges();
  }




  conectar(value) {
  return new Promise<any>((resolve, reject) => {
    firebase.auth().signInWithEmailAndPassword(value.email, value.password)
    .then(
      res => resolve(res),
      err => reject(err));
  })
  }

  desonectar() {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signOut()
      .then(() => {
        this.firebaseService.unsubscribeOnLogOut();
        resolve();
      }).catch((error) => {
        console.log(error);
        reject();
      });
    });
  }
}
