import { Component,  ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent  {
  public user$: Observable<any> = this.loginService.angularFireAuth.user;
  public openMenu = false;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  someMethod() {
    this.openMenu = true;
    console.log('button');
  }


  async onLogout() {
    try {
      await this.loginService.logout();
      this.router.navigate(['/login']);
    } catch (error) {
      console.log(error);
    }
  }
  // salir()
  // {
  //   this.loginService.isValid = false;
  // }
}
