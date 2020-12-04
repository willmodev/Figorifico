import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable, of } from 'rxjs';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class HandleHttpErrorService {

  constructor(
    public dialog: MatDialog
  ) { }

  public handleError<T>(operation: string, result?: T) {
    return (error: any): Observable<T> => {
      const titleError = error.statusText + ' ' + error.status;
      let message = operation;

      if (error.status === 400) {
        message = message + ', El servidor no pudo interpretar la solicitud dada una sintaxis inválida.';

        this.dialog.open(AlertDialogComponent, {
          width: '400px',
          data: { title: titleError, message: message,
                    nameBtnOne: 'Close', nameBtnTwo: 'Aceptar', btnEnable: false}
        });
      }
      console.log(error);



      return of(result as T);
    };
  }
  public log(message: string) {
    console.log(message);
  }
}
