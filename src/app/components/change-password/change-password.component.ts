import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckPasswordValidators } from './check-password.validators';


@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  passwordForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.passwordForm = fb.group(
      {
        oldPassword: ['',
          [
            Validators.required,
            Validators.minLength(6)
          ],
          CheckPasswordValidators.checkPassword
        ],
        newPassword: ['',
          [
            Validators.required,
            Validators.minLength(6)
          ]
        ],
        confirmPassword: ['',
          [
            Validators.required,
            Validators.minLength(6)
          ]
        ],
      },
      {
        validator: [
          CheckPasswordValidators.passwordsMatch,
          CheckPasswordValidators.usedPassword
        ]
      }
    );
  }

  ngOnInit() {
  }

  get oldPassword() {
    return this.passwordForm.get('oldPassword');
  }

  get newPassword() {
    return this.passwordForm.get('newPassword');
  }

  get confirmPassword() {
    return this.passwordForm.get('confirmPassword');
  }

  submit() {
    console.log(this.passwordForm);
  }

}
