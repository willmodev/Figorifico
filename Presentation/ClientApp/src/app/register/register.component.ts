import { Component, OnInit } from '@angular/core';
import { LoginService } from '../core/services/login/login.service';
import { Login } from '../Models/login';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  login:Login;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.login = new Login();
  }

  add()
  {
    this.loginService.post(this.login);
    alert('Usuario registrado!');
  }

}
