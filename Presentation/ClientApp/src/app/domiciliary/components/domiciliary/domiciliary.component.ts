import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material';
import { AlertDialogComponent } from 'src/app/@base/alert-dialog/alert-dialog.component';
import { DomiciliaryService } from 'src/app/core/services/domiciliary/domiciliary.service';
import { Car } from 'src/app/Models/Car';
import { Domiciliary } from 'src/app/Models/Domiciliary';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-domiciliary',
  templateUrl: './domiciliary.component.html',
  styleUrls: ['./domiciliary.component.css']
})
export class DomiciliaryComponent implements OnInit {

  isOptional = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  threeFormGoup: FormGroup;
  car: Car;
  domiciliary: Domiciliary;
  user: User;

  constructor(
    private _formBuilder: FormBuilder,
    private domiService:  DomiciliaryService,
    public dialog: MatDialog) { this.buildForm(); }

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

    this.user = new User();
    this.user.userName = '';
    this.user.password = '';
    this.user.role = 'Domiciliary';

    this.threeFormGoup =  this._formBuilder.group({
      userName: [this.user.userName, Validators.required],
      password: [this.user.password, Validators.required],
      role: [this.user.role],
      status: [this.user.status]
    });

  }

  next(): void {
    this.domiciliary = this.firstFormGroup.value;
    this.secondFormGroup.get('IdPropietary').setValue(this.domiciliary.identification);
  }
  nextTwo() {
    this.domiciliary.user  = this.threeFormGoup.value;
  }

  add(): void {
    this.car = this.secondFormGroup.value;
    this.car.domiciliary = this.domiciliary;

    this.domiService.post(this.car).subscribe( c => {
      if (c != null) {
        this.dialog.open(AlertDialogComponent, {
          width: '300px',
          data: { title: 'Resultado Operacion!', message: 'Domiciliario Creado..!',
                    nameBtnOne: 'Close', nameBtnTwo: 'Aceptar', btnEnable: false}
        });
        this.car = c;
        console.log(c);
      }
    });
  }
}


