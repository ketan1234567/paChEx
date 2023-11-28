import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class MainService {

 private apiurl="http://localhost:4200/api/books";

  constructor(private _http:HttpClient) { }
  getAllBooks():Observable<Book[]>{
  return this._http.get<Book[]>(this.apiurl)
  }
  getfavbookid(id: number): Observable<Book> {
    return this._http.get<Book>(`${this.apiurl}/${id}`);
  }

}
