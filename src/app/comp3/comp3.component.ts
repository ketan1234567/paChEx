import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../book';
import { MainService } from '../main.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrl: './comp3.component.css'
})

export class Comp3Component {
  allBooks:any
  constructor(private _mainServices:MainService){}

 
  ngOInit(){
this.getBook()
  }

  getBook(){
    this._mainServices.getAllBooks().subscribe(res=>{
  this.allBooks=res;
  console.log(this.allBooks);

    })

  }
}
