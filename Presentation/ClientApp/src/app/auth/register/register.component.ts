import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login/login.service';
import { Login } from '../../Models/login';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  login: Login;
  formGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
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

  async onRegister() {
    const {email, password} =  this.formGroup.value;
    try {
      const user = await  this.loginService.register(email, password);
      if (user) {
        // Redureccionar hacia login
        this.router.navigate(['/login']);
      }
    } catch (error) {
      console.log(error);
    }
  }

  // add() {
  //   this.loginService.post(this.login);
  //   alert('Usuario registrado!');
  // }





}
