import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class ReserveDataService  {
   base_url = 'https://trytablebooking.herokuapp.com';

  constructor(private http: HttpClient) {};

  getMenu() {
    return this.http.get(`${this.base_url}/menu`).pipe(map(response => response));
  }

  createNewOrder(requestBody: any) {
    return this.http.post(`${this.base_url}/new-order`, requestBody).pipe(map(response => response));
  } 

}
