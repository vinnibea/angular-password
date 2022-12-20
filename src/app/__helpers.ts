import { ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';

const regDigits = /^\d+$/gi;
const regLetters = /^[a-zA-Z]+$/gi;
const regSymbols = /^[?*=.@#$%!^":,/;<'>+\-_]+$/gi;
const letterAndNumber = /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
const letterAndSymbol = /^(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$/;
const symbolAndNumber = /^(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

export const weakPasswordRegx = [regDigits, regLetters, regSymbols];
export const mediumPasswordRegx = [
  letterAndNumber,
  symbolAndNumber,
  letterAndSymbol,
];
export const strongRegExp = [
  /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
];

export function checkPass(regExp: RegExp[], type: string): ValidatorFn {
  return (value: AbstractControl): ValidationErrors | null => {
    const check = regExp.some((re) => value.value.match(re));
    const name = type;
    return check ? { [name]: { value: value } } : null;
  };
}
