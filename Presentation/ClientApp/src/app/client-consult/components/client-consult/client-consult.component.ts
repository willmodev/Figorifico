import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertDialogComponent } from 'src/app/@base/alert-dialog/alert-dialog.component';
import { ClientModifyComponent } from 'src/app/client-modify/components/client-modify/client-modify.component';
import { ClientService } from 'src/app/core/services/client/client.service';
import { Client } from 'src/app/Models/client.model';

@Component({
  selector: 'app-client-consult',
  templateUrl: './client-consult.component.html',
  styleUrls: ['./client-consult.component.css']
})
export class ClientConsultComponent implements OnInit {

  clients: Client[];
  searchText: string;

  constructor(
    private clientService: ClientService,
    public dialog: MatDialog

    ) { }

  ngOnInit() {
    this.getClient();
  }

  getClient() {
    this.clientService.get().subscribe(result => {
      if (result != null) {
        this.clients = result;
      }
    });
  }

  delete(identification: string) {
    console.log(identification);

    const dialogRef = this.dialog.open(AlertDialogComponent, {
      width: '250px',
      data: { title: 'Resultado Operacion!', message: '¿Esta seguro de eliminarlo?',
              nameBtnOne: 'Cancelar', nameBtnTwo: 'Aceptar', btnEnable: true}
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.clientService.delete(identification).subscribe(c => {
          if (c != null) {
            this.dialog.open(AlertDialogComponent, {
              width: '250px',
              data: { title: 'Resultado Operacion!', message: 'Cliente Eliminado..!',
                      nameBtnOne: 'Close', nameBtnTwo: 'Aceptar', btnEnable: false}
            });
            this.getClient();
          }
        });
      }
    });
  }

  modify(c: Client) {
    console.log(c);
    const dialogRef = this.dialog.open(ClientModifyComponent, {
      data: {client: c}
    }).afterClosed().subscribe(p => {
      console.log('Despues de actualizar');
      this.getClient();
    });
  }
}
