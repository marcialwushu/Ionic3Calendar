import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from './user';
import * as firebase from 'firebase/app';



@Injectable()
export class AuthServiceProvider {
  user: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.user = angularFireAuth.authState;
  }

  createUser(user: User){
    return this.angularFireAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(user.email, user.password);
  }

}
