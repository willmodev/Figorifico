import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductService} from './services/product/product.service';
import { LoginService } from './services/login/login.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './services/interceptor/jwt.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ProductService,
    LoginService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ]
})
export class CoreModule { }
