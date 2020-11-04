import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../core/services/login/login.service';
import { Login } from '../../Models/login';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login;
  formGroup: FormGroup;
 isValid: boolean;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private formBuilder: FormBuilder

    ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.login =  new Login();
    this.login.email = '';
    this.login.password =  '';

    this.formGroup = this.formBuilder.group({
      email: [this.login.email],
      password: [this.login.password]
    });
  }

  async onLogin() {
    const {email, password} = this.formGroup.value;
    try {
      const user = await this.loginService.login(email, password);
      if (user) {
        // Redireccionar hacia Home
        this.router.navigate(['/home']);
      }
    } catch (error) {
      console.log(error);
    }
  }

  // validateLogin()
  // {
  //   this.loginService.isValid =  this.loginService.validateLogin(this.login.user, this.login.password);
  //   if(this.loginService.isValid)
  //   {
  //     alert("Datos correctos, !Bienvenido¡");
  //     this.router.navigate(['/']);
  //   }else alert("User y/ó Password incorrectos..!");
  // }


}
