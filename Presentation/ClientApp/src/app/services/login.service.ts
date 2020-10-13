import { Injectable } from '@angular/core';
import { Login } from '../Models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isValid: boolean;
  constructor() { }

  get(): Login[]{
    return JSON.parse(localStorage.getItem('logins'));
  }
  
  post(login: Login)
  {
    let logins: Login[] = [];
    if(this.get() != null){
      logins = this.get()
    }
    logins.push(login);
    localStorage.setItem('logins',JSON.stringify(logins));
  }


  validateLogin(user: string,password: string){
    let logins: Login[] = this.get();
    if(logins != null)
    {
      for(var i in logins )
      {
        if(user==logins[i].user && password==logins[i].password)
        {
          this.isValid =  true;
          console.log('entre aqui');
        }else this.isValid =  false;
      }
      
    }

    return this.isValid;
  }

 
  
}

