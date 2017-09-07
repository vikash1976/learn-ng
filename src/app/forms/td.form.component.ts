import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'td-form',
  templateUrl: './td.form.component.html',
  styleUrls: ['./td.form.component.css']
})
export class TDFormComponent {
    @ViewChild('f') formJSObject; // another way to access form object without passing it to func from template.
  deafultQuestion = "pet";
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  /*onSubmit(form:NgForm){
      console.log(form.value);
  }*/
  onSubmit(){
      console.log(this.formJSObject);
  }
}