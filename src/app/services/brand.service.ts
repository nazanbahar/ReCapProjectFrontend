import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl = 'https://localhost:44315/api/';

  constructor(private httpClient: HttpClient) {}

   //L18: GetAll-Postman-link: https://localhost:44315/api/brands/getall
  getBrands(): Observable<ListResponseModel<Brand>> {
    return this.httpClient.get<ListResponseModel<Brand>>(
      this.apiUrl + 'brands/getall'
    );
  }

  //L18: GetById-Postman-link: https://localhost:44315/api/brands/getbyid?brandId=1
  getBrandsById(brandId:number):Observable<ListResponseModel<Brand>>{
    let newPath = this.apiUrl + 'brands/getbyid?brandId' + brandId;
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }
 
}