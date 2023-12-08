import { group } from '@angular/animations';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

 // regForm: FormGroup;
 regForm: any;

 constructor(private _fb:FormBuilder) { }
 ngOnInit() {
 
   this.regForm =this._fb.group({
     id: [0],
     fname: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
     lname: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
     email: ['',[Validators.required,Validators.email]],

     mobilenos:new FormArray([
       new FormControl()
     ])

   })
   

   

 }
 teamForm=this._fb.group({
  teamName:['',Validators.required],
  teamAge:['',Validators.required],
  teamLead: this._fb.group({
    empName: ['', Validators.required],
    age: ['', [Validators.required, Validators.min(18)]],
    city: ['', Validators.required]
  }),

 })

 register(formdata:FormGroup){
 console.log(formdata.value)
 console.log(formdata.valid);

 }

 addmore(){
   this.regForm.get('mobilenos').push(new FormControl());
 }

 deleterow(id:any){
   this.regForm.get('mobilenos').removeAt(id);
 }
 onFormSubmit(){

 }

}
