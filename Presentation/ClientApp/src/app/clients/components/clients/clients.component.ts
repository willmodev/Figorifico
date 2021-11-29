import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/core/services/client/client.service';
import { Client } from 'src/app/Models/client.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { AlertDialogComponent } from 'src/app/@base/alert-dialog/alert-dialog.component';
import { User } from 'src/app/Models/User';
import { sizeCharacters } from 'src/app/utilities/validators/sizeCharacters';
import { rangeCharacters } from 'src/app/utilities/validators/rangeCharacters';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  client: Client;
  user: User;
  formGroupClient: FormGroup;
  formGroupUser: FormGroup;

  constructor(
    private clientService: ClientService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog

    ) {   this.buildForm(); }

  ngOnInit() {

  }

  private buildForm() {

    this.client =  new Client();

    this.formGroupClient = this.formBuilder.group({
      indentification: [
        '',
        {
          validators: [Validators.required, Validators.pattern('[0-9]*'), sizeCharacters(10,"number")]
        }
      ],
      name: [
        '',
        {
          validators: [Validators.required, rangeCharacters(1, 30), Validators.pattern('[a-zA-Z ]*')]
        }
      ],
      lastName: [
        '',
        {
          validators: [Validators.required, rangeCharacters(1, 30), Validators.pattern('[a-zA-Z ]*')]
        }
      ],
      phone: [
        '',
        {
          validators: [Validators.required, Validators.pattern('[0-9]*'), sizeCharacters(10, "number")]
        }
      ],
      address: [
        '',
        {
          validators: [Validators.required, rangeCharacters(1, 30)]
        }
      ],
      neighborhood: [
        '',
        {
          validators: [Validators.required, rangeCharacters(1, 30), Validators.pattern('[a-zA-Z0-9 ]*')]
        }
      ],
      city: [
        '',
        {
          validators: [Validators.required, rangeCharacters(1, 50), Validators.pattern('[a-zA-Z ]*')]
        }
      ],
      department: [
        '',
        {
          validators: [Validators.required, rangeCharacters(1, 50), Validators.pattern('[a-zA-Z ]*')]
        }
      ]
    });

    this.user = new User();
    this.user.role = 'Client';

    this.formGroupUser =  this.formBuilder.group({
      userName: [
        '',
        {
          validators: [Validators.required, rangeCharacters(3, 15), Validators.pattern('[a-zA-Z0-9]*')]
        }
      ],
      password: [
        '',
        {
          validators: [Validators.required, rangeCharacters(8, 30)]
        }
      ],
      role: [this.user.role],
      status: [this.user.status]

    });
  }

  getErrorIdentification() {
    var field = this.formGroupClient.get('indentification');

    if (field.hasError('required')) {
      return 'El campo identificación es requerido';
    }
    if (field.hasError('pattern')) {
      return 'El campo identificación permite solamente numeros';
    }
    if (field.hasError('sizeCharacters')) {
      return field.getError('sizeCharacters').mensaje;
    }

    return '';
  }

  getErrorName() {
    var field = this.formGroupClient.get('name');

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
    var field = this.formGroupClient.get('lastName');

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
    var field = this.formGroupClient.get('phone');

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
    var field = this.formGroupClient.get('address');

    if (field.hasError('required')) {
      return 'El campo dirección es requerido';
    }
    if (field.hasError('rangeCharacters')) {
      return field.getError('rangeCharacters').mensaje;
    }

    return '';
  }

  getErrorNeighborhood() {
    var field = this.formGroupClient.get('neighborhood');

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
    var field = this.formGroupClient.get('city');

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
    var field = this.formGroupClient.get('department');

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

  getErrorUserName() {
    var field = this.formGroupUser.get('userName');

    if (field.hasError('required')) {
      return 'El campo usuario es requerido';
    }
    if (field.hasError('pattern')) {
      return 'El campo usuario NO permite espacios entre caracteres y/o caracteres especiales';
    }
    if (field.hasError('rangeCharacters')) {
      return field.getError('rangeCharacters').mensaje;
    }

    return '';
  }

  getErrorPassword() {
    var field = this.formGroupUser.get('password');

    if (field.hasError('required')) {
      return 'El campo contraseña es requerido';
    }

    if (field.hasError('rangeCharacters')) {
      return field.getError('rangeCharacters').mensaje;
    }

    return '';
  }

  get controlClient() {
    return this.formGroupClient.controls;
  }

  get controlUser() {
    return this.formGroupUser.controls;
  }
  cleanForm() {
    this.formGroupClient.reset();
    this.formGroupUser.reset();
  }

  add() {
    if (this.formGroupClient.invalid && this.formGroupUser.invalid) { return; }
    this.client = this.formGroupClient.value;
    this.client.user = this.formGroupUser.value;
    console.log(this.client);
    this.clientService.post(this.client).subscribe(c => {
      if ( c != null ) {
        this.dialog.open(AlertDialogComponent, {
          width: '250px',
          data: { title: 'Resultado Operacion!', message: 'Cliente Creado..!',
                    nameBtnOne: 'Close', nameBtnTwo: 'Aceptar', btnEnable: false}
        });
        this.client = c;
        this.cleanForm();
      }
    });
  }

}
