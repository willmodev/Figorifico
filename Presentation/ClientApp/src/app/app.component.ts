import { Component } from '@angular/core';
import { LoginService } from './core/services/login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private loginService: LoginService){}


  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {

  }
}
