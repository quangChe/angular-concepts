import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CheckPasswordValidators {

  static checkPassword(control: AbstractControl) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if ((control.value as string) !== '123456') {
          resolve({ wrongPassword: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }

  static passwordsMatch(control: AbstractControl) {
    let newPassword = control.get('newPassword');
    let confirmPassword = control.get('confirmPassword');

    if (newPassword.value !== confirmPassword.value) {
      return {doesNotMatch: true};
    }

    return null;
  }

  static usedPassword(control: AbstractControl) {
    let oldPassword = control.get('oldPassword');
    let newPassword = control.get('newPassword');

    if (oldPassword.value === newPassword.value) {
      return {repeatedPassword: true};
    }

    return null;
  }
}
