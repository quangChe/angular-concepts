import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  // // ****Top-most form group (Parent of subgroup)
  // signupForm = new FormGroup({
  //   // ****Subgroup (Parent of username and password)
  //   account: new FormGroup({
  //     // ****Child form controls
  //     'username': new FormControl('',
  //     [
  //       Validators.required,
  //       Validators.minLength(5),
  //       UsernameValidators.cannotContainSpace
  //     ],
  //     [
  //       UsernameValidators.shouldBeUnique
  //     ]),
  //     password: new FormControl('', [Validators.required, Validators.minLength(5)])
  //   })
  //   // ****Form controls before getting subgroup parent (account)
  //   // 'username': new FormControl('',
  //   //   [
  //   //     Validators.required,
  //   //     Validators.minLength(5),
  //   //     UsernameValidators.cannotContainSpace
  //   //   ],
  //   //   [
  //   //     UsernameValidators.shouldBeUnique
  //   //   ]
  //   // ),
  //   // password: new FormControl('', [Validators.required, Validators.minLength(5)])
  // });

  // ****ALL ABSTRACT GROUPS (FormGroup, FormArray, FormControl)
  // friends = new FormGroup({
  //   names: new FormArray([]),
  //   school: new FormControl('', Validators.required),
  //   contact: new FormGroup({
  //     email: new FormControl(),
  //     phone: new FormControl()
  //   })
  // });

  // ****Form Builder (Same as 'friends' above)
  friends;
  // ****Form Builder (Same as 'signupForm' above)
  signupForm2: FormGroup;


  constructor(fb: FormBuilder) {
    this.friends =  fb.group({ // Form Group
      names: fb.array([]), // Form Array
      school: ['', Validators.required], // Form Control with validators
      contact: fb.group({ // Form Sub Group
        email: [], // Form Control with no validators
        phone: [] // Form Control with no validators
      })
    });

    this.signupForm2 = fb.group({
      account: fb.group({
        username: ['',
          [ Validators.required,
            Validators.minLength(5),
            UsernameValidators.cannotContainSpace ],
          [ UsernameValidators.shouldBeUnique ]
        ],
        password: ['',
          [Validators.required, Validators.minLength(5)]
        ]
      })
    });
  }


  // So we don't have to do "signupForm.get('username')" in our template
  get username() {
    // return this.signupForm.get('username');
    // return this.signupForm.get('account.username');
    return this.signupForm2.get('account.username');
  }

  get password() {
    // return this.signupForm.get('password');
    // return this.signupForm.get('account.password');
    return this.signupForm2.get('account.password');
  }

  // get things() {
  //   return this.formArray.get('things').controls;
  // }

  logFormControls(pw, us) {
    console.log(pw);
    console.log(us);
  }

  login() {
    // console.log(this.signupForm.controls.username === this.username);
    // this.signupForm.errors = ({
    //   loginError: true
    // });
    // console.log(this.signupForm)

    this.signupForm2.errors = ({
        loginError: true
      });
  }

  // Type annotation on friend to explicit let others know it's an input HTML element
  // instead of just a JSON or string value
  addFriend(newFriend: HTMLInputElement) {
    // get returns an abstract control object (so .push() isn't available on it)
    // Abstract Control = base class (parent) of FormControl, FormGroup and FormArray
    (this.friendNames as FormArray).push(new FormControl(newFriend.value));
    newFriend.value = '';
  }

  get friendNames() {
    return this.friends.get('names') as FormArray;
  }

  removeFriend(nameOfFriend: FormControl) {
    const i = this.friendNames.controls.indexOf(nameOfFriend);
    this.friendNames.removeAt(i);
  }
}
