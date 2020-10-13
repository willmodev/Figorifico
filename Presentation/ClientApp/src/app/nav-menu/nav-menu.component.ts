import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  
  constructor(public loginService: LoginService) {}
  isLogeed: boolean ;
  ngOnInit(): void {
  }
  
  salir()
  {
    this.loginService.isValid = false;
  }
}
