import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/core/services/auth/authentication.service';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent  {
  public user$: Observable<any> = this.authService.currentUser;
  public openMenu = false;
  total$: Observable<number>;

  constructor(
    private authService: AuthenticationService,
    private cartService: CartService,
    private loginService: LoginService,
    private router: Router
  ) {
    this.total$ =  this.cartService.cart$
    .pipe(
      map(products => products.length)
    );
  }

  someMethod() {
    this.openMenu = true;
    console.log('button');
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }


  // async onLogout() {
  //   try {
  //     await this.loginService.logout();
  //     this.router.navigate(['/login']);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
}
