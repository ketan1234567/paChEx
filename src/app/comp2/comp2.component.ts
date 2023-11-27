import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css'
})
export class Comp2Component {
  @Input() message:any;
  @Input() company23:any;
  @Input() mainData:any;
  @Output() showData=new EventEmitter();
  AllObject:any
  mainArray:any

  ngOnInit(){
  //  console.log(this.message);
  //  console.log(this.company23);
  console.log(this.mainData);
   this.mainArray=this.mainData
    //this.AllObject=this.company23
    
  }
  childComponent(val:any){
    this.showData.emit(val);
  }
}
