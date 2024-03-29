import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private apiUrl = 'http://localhost:3306';

  constructor(private http: HttpClient) {}

  fetchData(): Observable<any> {
    const url = `${this.apiUrl}/`;
    return this.http.get(url);
  }
}
