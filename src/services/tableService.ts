import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class TableDataService  {
   base_url = 'https://trytablebooking.herokuapp.com';

  constructor(private http: HttpClient) {};

  getTables() {
    return this.http.get(`${this.base_url}/tables`).pipe(map(response => response));
  } 

}
