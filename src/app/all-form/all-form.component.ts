import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-all-form',
  templateUrl: './all-form.component.html',
  styleUrl: './all-form.component.css'
})
export class AllFormComponent {

  UpdatedFormFileds: any;

  // This is FormGroup if you have used multiple inputs like checkbox and selectbox
  MainForm = new FormGroup({
    fname: new FormControl(),
    lname: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  });
  
  email= new FormControl()
  password= new FormControl()
  submit() {
    this.UpdatedFormFileds = [
      this.MainForm.value.fname,
      this.MainForm.value.lname,
      this.email.value,
      this.password.value
    ];
  
    console.log(this.UpdatedFormFileds);
  }


}
