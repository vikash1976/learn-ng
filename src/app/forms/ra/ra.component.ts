import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-ra',
  templateUrl: './ra.component.html',
  styleUrls: ['./ra.component.css']
})
export class RaComponent implements OnInit {
  genders = ['male', 'female', 'dnr'];
  signupForm: FormGroup;
  blacklistedNames = ['11AA', '22BB', '33CC'];
  zipAlert = "This field is required.";
  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.checkBlacklistedNames.bind(this)]),
        'email': new FormControl(null, Validators.compose([Validators.required, Validators.email]))
      }),
      'gender': new FormControl('male'),
      'addressData': new FormGroup({
        'country': new FormControl(null, [Validators.required]),
        'zip': new FormControl(null, [Validators.required])
      }),
      'hobbies': new FormArray([])
    });

    this.signupForm.get('addressData.country').valueChanges.subscribe(
      (country) => {
        if(country === 'India'){
          this.signupForm.get('addressData.zip').setValidators([Validators.required, Validators.minLength(6)]);
          this.zipAlert = "Has to be min of 6 digits.";
        }
        else {
            this.signupForm.get('addressData.zip').setValidators([Validators.required])
            this.zipAlert = "This field is required."
        }
        this.signupForm.get('addressData.zip').updateValueAndValidity();
      }
    )
  }
  onSubmit() {
    console.log(this.signupForm);

  }
  addHobby() {
    (<FormArray>this.signupForm.get('hobbies')).push(
      new FormControl('Reading'));

  }
  checkBlacklistedNames(control: FormControl): {[key: string]: boolean} {
    if(this.blacklistedNames.indexOf(control.value) !== -1) {
      return {'inBlacklistedName': true};
    }
    return null;
  }

}
