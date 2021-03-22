/* 1) SERVICES - Definition
s1. HttpClient servisi önce import edildi
s2. constructor metoduyla enjekte edildi. 
s3.Böylece get() metodunda Http servisi hazır hale getirildi.
s4. apiUrl = 'x';
s5. import {*} from 'x';   */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //manuel -Code Required to Request Backend...
import { Observable } from 'rxjs'; //intelicense with imported...
import { ListResponseModel } from '../models/listResponseModel'; //intelicense with imported...
import { Car } from '../models/car'; //intelicense with imported...

@Injectable({
  providedIn: 'root'
})
export class CarService {
  
  //Added - apiUrl for service 
  apiUrl = 'https://localhost:44315/api/cars/getall'; //s1.


  //added - httpClient
  constructor(private httpClient:HttpClient) { } //s2.

  
  //get() method
  getCars():Observable<ListResponseModel<Car>> { //s3. 

    return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl); //s4.
   
  };


}

