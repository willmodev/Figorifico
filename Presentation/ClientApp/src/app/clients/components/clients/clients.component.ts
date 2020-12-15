import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/core/services/client/client.service';
import { Client } from 'src/app/Models/client.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { AlertDialogComponent } from 'src/app/@base/alert-dialog/alert-dialog.component';
import { User } from 'src/app/Models/User';


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

    this.client.indentification = '';
    this.client.name = '';
    this.client.lastName = '';
    this.client.phone = '';
    this.client.address = '';
    this.client.neighborhood = '';
    this.client.city = '';
    this.client.department = '';

    this.formGroupClient = this.formBuilder.group({
      indentification: [this.client.indentification, Validators.required],
      name: [this.client.name, Validators.required],
      lastName: [this.client.lastName, Validators.required],
      phone: [this.client.phone, Validators.required],
      address: [this.client.address, Validators.required],
      neighborhood: [this.client.neighborhood, Validators.required],
      city: [this.client.city, Validators.required],
      department: [this.client.department, Validators.required]
    });

    this.user = new User();
    this.user.userName = '';
    this.user.password = '';
    this.user.role = 'Client';

    this.formGroupUser =  this.formBuilder.group({
      userName: [this.user.userName, Validators.required],
      password: [this.user.password, Validators.required],
      role: [this.user.role],
      status: [this.user.status]

    });
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
