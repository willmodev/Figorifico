import { AbstractControl, ValidatorFn } from '@angular/forms';

export function fileTypeValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    const valor = <string>control.value;
    var extensValidas = ['jpg', 'png', 'jpeg', 'bmp'];
    if (!valor) return;
    if (valor.length === 0) return;


    var extension = valor.split('.')[1];
    if (extensValidas.indexOf(extension) === -1) {
      return {
        fileTypeValidator: {
          mensaje: 'Solo se permiten formatos: .png .jpg .jpeg .bmp'
        }
      };
    }

    return;
  }
}
