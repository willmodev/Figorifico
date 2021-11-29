import { AbstractControl, ValidatorFn } from '@angular/forms';

export function rangeCharacters(min: number, max: number): ValidatorFn {
  return (control: AbstractControl) => {
    const valor = <string>control.value;
    if (!valor) return;
    if (valor.length === 0) return;

    const size = valor.length;
    if (size < min || size > max) {
      return {
        rangeCharacters: {
          mensaje: 'El tamaño del campo debe estar entre ' + min + ' y ' + max + ' caracteres' 
        }
      };
    }

    return;
  }
}
