import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../core/services/login/login.service';
import { Login } from '../Models/login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 login: Login;
 isValid: boolean;

  constructor(private loginService: LoginService, private router:Router) { }

  ngOnInit() {
    this.login = new Login();
  }

  validateLogin()
  {
    this.loginService.isValid =  this.loginService.validateLogin(this.login.user, this.login.password);
    if(this.loginService.isValid)
    {
      alert("Datos correctos, !Bienvenido¡");
      this.router.navigate(['/']);
    }else alert("User y/ó Password incorrectos..!");
  }

  

}
