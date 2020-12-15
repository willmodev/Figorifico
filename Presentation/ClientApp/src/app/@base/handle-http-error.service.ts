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

  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error.status);


      if (error.status === 500) {
        this.mostrarError500(error);
      }
     if (error.status === 400) {
       this.mostrarError400(error);
     }
     if (error.status === 401) {
       this.mostrarError500(error);
     }

      return of(result as T);
    };
  }
  public log(message: string) {
    console.log(message);

  }
  private mostrarError500(error: any) {
    console.error(error);
  }

  private mostrarError400(error: any): void {
    console.log('Entré aqui');
    // console.error(error.errros);
    let contadorValidaciones = 0;
    // tslint:disable-next-line:max-line-length
    let mensajeValidaciones = `Señor(a) usuario(a), se han presentado algunos errores de validación, por favor revíselos y vuelva a realizar la operación.<br/><br/>`;

      // tslint:disable-next-line:forin
      for (const prop in error.error.errors) {
      contadorValidaciones++;
      mensajeValidaciones += `<strong>${contadorValidaciones}. ${prop}:</strong>`;

      error.error.errors[prop].forEach(element => {
        mensajeValidaciones += `<br/> - ${element}`;
      });

      mensajeValidaciones += `<br/>`;
    }
    this.dialog.open(AlertDialogComponent, {
      width: '450px',
      data: { title: 'Mensaje de Error', message: mensajeValidaciones,
              nameBtnOne: 'Cerrar', nameBtnTwo: 'Aceptar', btnEnable: false}
    });

  }
}
