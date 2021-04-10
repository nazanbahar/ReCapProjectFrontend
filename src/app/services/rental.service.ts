/* 1) DTO-GetAll-PostmanLink for getCarsDetails()
s1. cars
L18: V1:GETALL→ getCarDetails : Postmanlink: https://localhost:44315/api/cars/getallcardetails
s2. rentals
V1:GETALL→ getRentalDetails : Postmanlink: https://localhost:44315/api/rentals/getallrentaldetails
s3. cutomers
V1:GETALL→ getCustomerDetails : Postmanlink: https://localhost:44315/api/customers/getallcustomerdetails
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl='https://localhost:44315/api/rentals/getall';
  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponseModel<Rental>> {

    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl);
  }
}
