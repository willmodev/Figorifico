import { AbstractControl, ValidatorFn } from '@angular/forms';

export function sizeCharacters(sizeValue: number, typeFiel: string): ValidatorFn {
  return (control: AbstractControl) => {
    const valor = <string>control.value;
    if (!valor) return;
    if (valor.length === 0) return;
    const _typeFiel = (typeFiel == "number") ? "digitos" : "caracteres";

    const size = valor.length;
    if (size != sizeValue) {
      return {
        sizeCharacters: {
          mensaje: 'El tamaño del campo debe ser de ' + sizeValue + ' ' + _typeFiel
        }
      };
    }

    return;
  }
}
