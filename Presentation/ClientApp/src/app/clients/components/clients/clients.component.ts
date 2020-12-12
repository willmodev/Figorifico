import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/core/services/client/client.service';
import { Client } from 'src/app/Models/client.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { AlertDialogComponent } from 'src/app/@base/alert-dialog/alert-dialog.component';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  client: Client;
  formGroup: FormGroup;

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

    this.formGroup = this.formBuilder.group({
      indentification: [this.client.indentification, Validators.required],
      name: [this.client.name, Validators.required],
      lastName: [this.client.lastName, Validators.required],
      phone: [this.client.phone, Validators.required],
      address: [this.client.address, Validators.required],
      neighborhood: [this.client.neighborhood, Validators.required],
      city: [this.client.city, Validators.required],
      department: [this.client.department, Validators.required]
    });
  }

  get control() {
    return this.formGroup.controls;
  }
  cleanForm() {
    this.formGroup.reset();
  }

  add() {
    if (this.formGroup.invalid) { return; }
    this.client = this.formGroup.value;
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
