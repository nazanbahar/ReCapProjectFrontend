import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  apiUrl = 'https://localhost:44315/api/';

  constructor(private httpClient: HttpClient) {}

  getColors(): Observable<ListResponseModel<Color>> {
    return this.httpClient.get<ListResponseModel<Color>>(
      this.apiUrl + 'colors/getall'
    );
  }

  //L18: GetById-Postman-link: https://localhost:44315/api/colors/getbyid?colorId=1
  getColorsById(colorId:number):Observable<ListResponseModel<Color>>{
    let newPath = this.apiUrl + 'colors/getbyid?colorId' + colorId;
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }

}
