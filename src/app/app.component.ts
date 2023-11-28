import { Component } from '@angular/core';
import { MainService } from './main.service';
import { Observable } from 'rxjs';
import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private _mainServices: MainService) {

  }
  childData: any
  allBooks: any;

  favBook: Observable<Book> | undefined; // Replace with your initial value or observable

  ngOnInit() {
    this.getBooks()

  }
  title = 'paChEx';
  _msg = "Hello Sahosoft";
  chnages(val: any) {
    this._msg = val;
  }
  allMaindata = ['vishal', 'hitesh', 'suraj', 'mustaq']
  company = {
    id: '102',
    name: "ketan",
    email: 'deshmukhketan647@gmail.com',
    password: '1234'
  }
  getBooks() {
    this._mainServices.getAllBooks().subscribe(
      (books) => {
        this.allBooks = books;
      },
      (error) => {
        console.error('Error fetching books:', error);
        // Handle the error as needed
      }
    );
  }

  mukesh(val: any) {
    this.childData = val
    console.log(val);

  }
  checkId(id:any){
    this.favBook = this._mainServices.getfavbookid(id);
    console.log(this.favBook);
    
  }



}
