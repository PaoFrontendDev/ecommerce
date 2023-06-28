import { Injectable } from '@angular/core';


import { GoogleAuthProvider } from '@angular/fire/auth';
import { pipe } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore,) { }

  signInGoogle() {
    this.afAuth.signInWithPopup(new GoogleAuthProvider).then(data => {
      console.log(data)

    })
  }


}
