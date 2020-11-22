import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertDialogComponent } from 'src/app/@base/alert-dialog/alert-dialog.component';
import { ClientService } from 'src/app/core/services/client/client.service';
import { Client } from 'src/app/Models/client.model';
import { DialogModifyClient } from 'src/app/Models/DialogModifyClient';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


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
