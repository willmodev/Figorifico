import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // *ngFor, *ngIf
import {  HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
