import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private config: NgbCarouselConfig) {
    config.interval = 3000;
    config.pauseOnHover = true;
   }

  images: string[] = [
    '/assets/images/banner_1.jpg',
    '/assets/images/banner_2.jpg',
    '/assets/images/banner_3.jpg'
  ];

  ngOnInit() {
  }

}
