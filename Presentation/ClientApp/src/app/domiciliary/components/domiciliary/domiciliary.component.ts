import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Car } from 'src/app/Models/Car';
import { Domiciliary } from 'src/app/Models/Domiciliary';

@Component({
  selector: 'app-domiciliary',
  templateUrl: './domiciliary.component.html',
  styleUrls: ['./domiciliary.component.css']
})
export class DomiciliaryComponent implements OnInit {

  isOptional = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  car: Car;
  domiciliary: Domiciliary;

  constructor(private _formBuilder: FormBuilder) { this.buildForm(); }

  ngOnInit() {

  }

  private buildForm() {

    this.domiciliary =  new Domiciliary();

    this.firstFormGroup = this._formBuilder.group({

      identification: [this.domiciliary.identification, Validators.required],
      name: [this.domiciliary.name, Validators.required],
      lastName: [this.domiciliary.lastName, Validators.required],
      address: [this.domiciliary.address, Validators.required]
    });

    this.car = new Car();
    this.secondFormGroup = this._formBuilder.group({
     placa: [this.car.placa, Validators.required],
     make: [this.car.make, Validators.required],
     model: [this.car.model, Validators.required],
     IdPropietary: [{value: '', disabled: true}]
    });
  }

  next(): void {
    this.domiciliary = this.firstFormGroup.value;
    this.secondFormGroup.get('IdPropietary').setValue(this.domiciliary.identification);
  }

  add(): void {
    this.car = this.secondFormGroup.value;
    this.car.domiciliary = this.domiciliary;

    console.log(this.car);
  }
}


