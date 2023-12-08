import { Component, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-f',
  templateUrl: './template-driven-f.component.html',
  styleUrl: './template-driven-f.component.css'
})
export class TemplateDrivenFComponent {
  FnameLe:any
 	
  resgister(regdata:NgForm){
   // console.log(regdata.value.firstName);
    this.FnameLe=regdata.value.firstName.length
   console.log(this.FnameLe >=3);
   
  }
  mainVal(val:any){
    this.FnameLe=val.value.length
console.log(this.FnameLe);

  }

}
