import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

export class UsernameValidators {

  // ValidatorFn
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).includes(' ')) {
      return { containsSpace: true };
    } else {
      return null;
    }
  }

  // AsyncValidatorFn
  static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors|null>  {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'quang') {
          resolve({ nameTaken: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
}
