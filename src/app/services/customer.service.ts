/* 1) DTO-GetAll-PostmanLink for getCustomersDetails()
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
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl='https://localhost:44315/api/customers/getall';
  
  constructor(private httpClient:HttpClient) { }

  getCustomer():Observable<ListResponseModel<Customer>>{

    return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl);
  }
}
