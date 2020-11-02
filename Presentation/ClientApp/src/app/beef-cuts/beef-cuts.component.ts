import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beef-cuts',
  templateUrl: './beef-cuts.component.html',
  styleUrls: ['./beef-cuts.component.css']
})
export class BeefCutsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  products = [{
    id: 100,
    firstName: "Ramesh",
    lastName: "Fadatare",
    emailId: "ramesh@gmail.com"
  },
  {
    id: 101,
    firstName: "Tony",
    lastName: "Stark",
    emailId: "tony@gmail.com"
  },
  {
    id: 101,
    firstName: "Tony",
    lastName: "Stark",
    emailId: "tony@gmail.com"
  }, {
    id: 100,
    firstName: "Tom",
    lastName: "Cruise",
    emailId: "tom@gmail.com"
  }];


}
