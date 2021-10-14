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

  getTableById(tableId) {
    return this.http.get(`${this.base_url}/tables/${tableId}`).pipe(map(response => response));
  } 

 updateTableById(tableId, requestBody) {
    return this.http.patch(`${this.base_url}/tables/${tableId}`, requestBody).pipe(map(response => response));
  } 

}
