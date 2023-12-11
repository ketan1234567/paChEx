import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  textUrl = "/api/message";
  private apiurl = "http://localhost:4200/api/books";

  constructor(private _http: HttpClient) { }

  getAllBooks(): Observable<Book[]> {
    let httpHeaders = new HttpHeaders().set(
      'Content-type', 'json'
    )
    return this._http.get<Book[]>(this.apiurl, { headers: httpHeaders })
  }
  getfavbookid(id: number): Observable<Book> {
    return this._http.get<Book>(`${this.apiurl}/${id}`);
  }
  getTextmsg(): Observable<string> {
    return this._http.get(this.textUrl, { 'responseType': 'text' })
  }
  filterBooks(cat: string, yr: string): Observable<Book[]> {
    let httHeaders = new HttpHeaders()
      .set("Accept", "application/json")

    return this._http.get<Book[]>(this.apiurl + "?category=" + cat + "&year" + yr, {
      headers: httHeaders
    })
  }
  filterBooks1(cat: string, yr: string): Observable<Book[]> {
    let httHeaders = new HttpHeaders()
      .set("Accept", "application/json")
    let httparams = new HttpParams()
      .set("category", cat)
      .set("Year", yr)
    return this._http.get<Book[]>(this.apiurl + "?category=" + cat + "&year" + yr, {
      headers: httHeaders,
      params: httparams
    })
  }
  allResponseCode() {
    return this._http.get(this.apiurl, {
      observe: 'response'
    });

  }

}
