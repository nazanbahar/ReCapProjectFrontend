/* 1) SERVICES - Definition
s1. HttpClient servisi önce import edildi
s2. constructor metoduyla enjekte edildi. 
s3.Böylece get() metodunda Http servisi hazır hale getirildi.
s4. apiUrl = 'x';
s5. import {*} from 'x'; 

s6. İşlem adımları:
I. Öncelikle httpClient İmport et. 
constructor içinde yazarken otomatik olarak intelicense ile import ediliyor.
Sorun olursa manule import edilir.
ex. import {*} from 'x'; 
II. export edilen servis içini doldur.
export class BrandService {*} içiden tanımlanır.
    a1.apiUrl = 'x'; 
    a2. constructor(*) {} 
    a3. getBrands():<<*>>{return <<*>>(*)}; 
*/

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //manuel&intelicense-Code Required to Request Backend...
import { from, Observable } from 'rxjs'; //intelicense with imported...
import { ListResponseModel } from '../models/listResponseModel'; //intelicense with imported...
import { Brand } from '../models/brand'; //intelicense with imported...


@Injectable({
  providedIn: 'root'
})
export class BrandService {
 
  //Added - apiUrl for service 
  apiUrl ='https://localhost:44315/api/brands/getall';  
 
 
  //added - httpClient
  constructor(private httpClient:HttpClient) {}
 
 
  //get() method-->return--> httpClient
  getBrands():Observable<ListResponseModel<Brand>> {

    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl);

  }

}

