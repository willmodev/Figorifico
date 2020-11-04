import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  public isLogged =  false;
  // tslint:disable-next-line: comment-format
  //public user: any;
  public user$: Observable<any> = this.loginService.angularFireAuth.user;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}




  async ngOnInit() {

    // this.user = await this.loginService.getCurrentUser();

    // if (this.user) {
    //   this.isLogged = true;
    // }
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
