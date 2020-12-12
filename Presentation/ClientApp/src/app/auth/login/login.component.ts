import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../core/services/login/login.service';
import { Login } from '../../Models/login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/auth/authentication.service';
import { first } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { AlertDialogComponent } from 'src/app/@base/alert-dialog/alert-dialog.component';


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
    private authService: AuthenticationService,
    private loginService: LoginService,
    private router: Router,
    private formBuilder: FormBuilder,
    private dialog: MatDialog

    ) { }

    ngOnInit() {
      this.buildForm();
    }

    buildForm() {
      this.formGroup = this.formBuilder.group({
        userName: ['', Validators.required],
        password: ['', Validators.required]
      });
    }

    get control() {
      return this.formGroup.controls;
    }

    onLogin() {
      if (this.formGroup.invalid) {
        return;
      }

      this.authService.login(this.control.userName.value, this.control.password.value)
        .pipe(first())
        .subscribe(
          data => {

            this.dialog.open(AlertDialogComponent, {
              width: '320px',
              data: { title: 'Resultado Operacion!', message: 'Datos Correctos, Bienvenido...!',
                        nameBtnOne: 'Close', nameBtnTwo: 'Aceptar', btnEnable: false}
            });
            this.router.navigate(['/home']);
          },
          error => {
            this.dialog.open(AlertDialogComponent, {
              width: '320px',
              data: { title: 'Resultado Operacion!', message: 'Datos incorrectos, por favor intente nuevamente...!',
                        nameBtnOne: 'Close', nameBtnTwo: 'Aceptar', btnEnable: false}
            });
           console.log(error);
          });

    }

  // async onLogin() {
  //   const {email, password} = this.formGroup.value;
  //   try {
  //     const user = await this.loginService.login(email, password);
  //     if (user) {
  //       // Redireccionar hacia Home
  //       this.router.navigate(['/home']);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }



}
