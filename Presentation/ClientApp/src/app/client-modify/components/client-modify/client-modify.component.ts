import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertDialogComponent } from 'src/app/@base/alert-dialog/alert-dialog.component';
import { ClientService } from 'src/app/core/services/client/client.service';
import { Client } from 'src/app/Models/client.model';
import { DialogModifyClient } from 'src/app/Models/DialogModifyClient';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { rangeCharacters } from '../../../utilities/validators/rangeCharacters';
import { sizeCharacters } from '../../../utilities/validators/sizeCharacters';


@Component({
  selector: 'app-client-modify',
  templateUrl: './client-modify.component.html',
  styleUrls: ['./client-modify.component.css']
})

export class ClientModifyComponent implements OnInit {

  client: Client;
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private clientService: ClientService,
    public dialogRef: MatDialogRef<ClientModifyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogModifyClient
  ) { this.buildForm(); }

  ngOnInit() {
  }

  private buildForm() {

    this.client =  new Client();
    this.client = this.data.client;

    this.formGroup = this.formBuilder.group({
      name: [
        this.client.name,
        {
          validators: [Validators.required, rangeCharacters(1, 30), Validators.pattern('[a-zA-Z ]*')]
        }
      ],
      lastName: [
        this.client.lastName,
        {
          validators: [Validators.required, rangeCharacters(1, 30), Validators.pattern('[a-zA-Z ]*')]
        }
      ],
      phone: [
        this.client.phone,
        {
          validators: [Validators.required, Validators.pattern('[0-9]*'), sizeCharacters(10, "number")]
        }
      ],
      address: [
        this.client.address,
        {
          validators: [Validators.required, rangeCharacters(1, 30)]
        }
      ],
      neighborhood: [
        this.client.neighborhood,
        {
          validators: [Validators.required, rangeCharacters(1, 30), Validators.pattern('[a-zA-Z0-9 ]*')]
        }
      ],
      city: [
        this.client.city,
        {
          validators: [Validators.required, rangeCharacters(1, 50), Validators.pattern('[a-zA-Z ]*')]
        }
      ],
      department: [
        this.client.department,
        {
          validators: [Validators.required, rangeCharacters(1, 50), Validators.pattern('[a-zA-Z ]*')]
        }
      ]
    });
  }

  getErrorName() {
    var field = this.formGroup.get('name');

    if (field.hasError('required')) {
      return 'El campo nombres es requerido';
    }
    if (field.hasError('pattern')) {
      return 'El campo nombres NO permite numeros y/o caracteres especiales';
    }
    if (field.hasError('rangeCharacters')) {
      return field.getError('rangeCharacters').mensaje;
    }

    return '';
  }

  getErrorLastName() {
    var field = this.formGroup.get('lastName');

    if (field.hasError('required')) {
      return 'El campo apellidos es requerido';
    }
    if (field.hasError('pattern')) {
      return 'El campo apellidos NO permite numeros y/o caracteres especiales';
    }
    if (field.hasError('rangeCharacters')) {
      return field.getError('rangeCharacters').mensaje;
    }

    return '';
  }

  getErrorPhone() {
    var field = this.formGroup.get('phone');

    if (field.hasError('required')) {
      return 'El campo telefono es requerido';
    }
    if (field.hasError('pattern')) {
      return 'El campo telefono permite solamente numeros';
    }
    if (field.hasError('sizeCharacters')) {
      return field.getError('sizeCharacters').mensaje;
    }

    return '';
  }

  getErrorAddress() {
    var field = this.formGroup.get('address');

    if (field.hasError('required')) {
      return 'El campo dirección es requerido';
    }
    if (field.hasError('rangeCharacters')) {
      return field.getError('rangeCharacters').mensaje;
    }

    return '';
  }

  getErrorNeighborhood() {
    var field = this.formGroup.get('neighborhood');

    if (field.hasError('required')) {
      return 'El campo barrio es requerido';
    }
    if (field.hasError('pattern')) {
      return 'El campo barrio NO permite caracteres especiales';
    }
    if (field.hasError('rangeCharacters')) {
      return field.getError('rangeCharacters').mensaje;
    }

    return '';
  }

  getErrorCity() {
    var field = this.formGroup.get('city');

    if (field.hasError('required')) {
      return 'El campo ciudad es requerido';
    }
    if (field.hasError('pattern')) {
      return 'El campo ciudad NO permite numeros y/o caracteres especiales';
    }
    if (field.hasError('rangeCharacters')) {
      return field.getError('rangeCharacters').mensaje;
    }

    return '';
  }

  getErrorDepartment() {
    var field = this.formGroup.get('department');

    if (field.hasError('required')) {
      return 'El campo departamento es requerido';
    }
    if (field.hasError('pattern')) {
      return 'El campo departamento NO permite numeros y/o caracteres especiales';
    }
    if (field.hasError('rangeCharacters')) {
      return field.getError('rangeCharacters').mensaje;
    }

    return '';
  }

  get control() {
    return this.formGroup.controls;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  modify(): void {
    if (this.formGroup.invalid) { return; }
    this.client = this.formGroup.value;
    this.client.indentification = this.data.client.indentification;

    this.clientService.put(this.client).subscribe(p => {
       this.dialog.open(AlertDialogComponent, {
          width: '250px',
          data: { title: 'Resultado Operacion!', message: 'Cliente Actualizado..!',
          nameBtnOne: 'Close', nameBtnTwo: 'Aceptar', btnEnable: false}
        });
    });

    this.dialogRef.close();
  }

}
