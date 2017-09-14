import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'td-form',
  templateUrl: './td.form.component.html',
  styleUrls: ['./td.form.component.css']
})
export class TDFormComponent {
  @ViewChild('f') formJSObject: NgForm; // another way to access form object without passing it to func from template.
  deafultQuestion = "pet";
  suggestedName: string = '';
  secretAnswer: string = '';
  genders = ['male', 'female', 'dnr']
  formData: {
    userData: {
      username,
      email,
      gender
    },
    secret,
    secretAnswer
  };
  suggestUserName() {
    const rand = Math.random().toFixed(2)
    //this.suggestedName = "Superuser" + rand;
    const suggestedName = "Superuser" + rand;
    this.formJSObject.form.patchValue({
      userData: {
        username: suggestedName
      }
    });

  }
  /*onSubmit(form:NgForm){
      console.log(form.value);
  }*/
  onReset() {
    this.formJSObject.resetForm();
  }
  onSubmit() {
    console.log(this.formJSObject.value);
    this.formData = this.formJSObject.value;
    /*this.formData.userData.username = this.formJSObject.value.userData.username;
    this.formData.userData.email = this.formJSObject.value.userData.email;
    this.formData.userData.gender = this.formJSObject.value.userData.gender;
    this.formData.secret = this.formJSObject.value.secret;
    this.formData.secretAnswer = this.formJSObject.value.secretAnswer;*/
    
  }
}