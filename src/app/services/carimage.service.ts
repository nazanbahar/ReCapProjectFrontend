import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarImage } from '../models/carimage';


@Injectable({
  providedIn: 'root'
})
export class CarimageService {

  apiUrl = 'https://localhost:44315/api/carimages/getall';


  constructor(private httpClient:HttpClient) { }


  getCarImages():Observable<ListResponseModel<CarImage>>{

    return this.httpClient.get<ListResponseModel<CarImage>>(this.apiUrl);
  }

}