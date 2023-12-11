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
  ReadBooks: any;
  OurData: any
  book123: any
  book1234: any
  Respone: any
  fullresponse: any
  favBook: Observable<Book> | undefined; // Replace with your initial value or observable
  ngOnInit() {
    this.getBooks()
    this.getAllmsg()
    this.filterBooksMain("Angular", "2022");
    this.filterBooksMain12('Java123', '2026')
    this.allResponeCode()
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
        //console.log(this.allBooks);

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
  checkId(id: any) {
    this.favBook = this._mainServices.getfavbookid(id);
    console.log(this.favBook);

  }


  getAllmsg() {
    this.ReadBooks = this._mainServices.getTextmsg().subscribe(
      (msg: any) => console.log(msg)
    );
  }
  filterBooksMain(category: string, year: string) {
    this._mainServices.filterBooks(category, year)
      .subscribe(res => {
        //console.log(res);
        this.book123 = res
      });

  }
  filterBooksMain12(category: string, year: string) {
    this._mainServices.filterBooks(category, year)
      .subscribe(res => {
        console.log(res);
        this.book1234 = res
      });

  }
  allResponeCode() {
    this.Respone = this._mainServices.allResponseCode().subscribe(res => {
      //console.log(res);
      if (res.status === 200) {
        //console.log("Data comes in Successfully"+res);
        this.fullresponse = res.body;
        //console.log(this.fullresponse);

      } else {
        console.log("404 error is coming ");

      }

    })

  }
}
