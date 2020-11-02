import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductService} from './services/product/product.service';
import { LoginService } from './services/login/login.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[ProductService, LoginService]
})
export class CoreModule { }
