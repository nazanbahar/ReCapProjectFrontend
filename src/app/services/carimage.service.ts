import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarImage } from '../models/carImage';


@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl = 'https://localhost:44315/api/';  
  

  constructor(private httpClient:HttpClient) { }


  getCarImages():Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + 'carimages/getall';
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }


  //L18: image- for cardetailcomponent : Postman GET Request: https://localhost:44315/api/carimages/getallbycar?carId=1 
  getImagesByCar(carId:number): Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + "carimages/getallbycar?carId=" + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }


}