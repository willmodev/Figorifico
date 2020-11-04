import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { User } from 'firebase';
import { first } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // isValid: boolean =  true;
  public user: User;
  constructor(public angularFireAuth: AngularFireAuth) { }

  async login(email: string, password: string) {
    try{
      return  await this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }
  }

  async logout() {
    try {
      await this.angularFireAuth.auth.signOut();
    } catch (error) {
      console.log(error);
    }
  }

  async register(email: string, password: string) {
    try {
      return await this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }
  }

  getCurrentUser() {
    return this.angularFireAuth.authState.pipe(first()).toPromise();
  }

// get(): Login[]{
  //   return JSON.parse(localStorage.getItem('logins'));
  // }
  
  // post(login: Login)
  // {
  //   let logins: Login[] = [];
  //   if(this.get() != null){
  //     logins = this.get()
  //   }
  //   logins.push(login);
  //   localStorage.setItem('logins',JSON.stringify(logins));
  // }


  // validateLogin(user: string,password: string){
  //   let logins: Login[] = this.get();
  //   if(logins != null)
  //   {
  //     for(var i in logins )
  //     {
  //       if(user==logins[i].user && password==logins[i].password)
  //       {
  //         this.isValid =  true;
  //         console.log('entre aqui');
  //       }else this.isValid =  true;
  //     }
      
  //   }

  //   return this.isValid;
  // }



 
  
}

