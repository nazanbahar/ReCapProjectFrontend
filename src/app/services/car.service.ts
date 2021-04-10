import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //manuel -Code Required to Request Backend...
import { Observable } from 'rxjs'; //intelicense with imported...
import { ListResponseModel } from '../models/listResponseModel'; //intelicense with imported...
import { CarDetail } from '../models/carDetail';


@Injectable({
  providedIn: 'root',
})
export class CarService {
  //Added - apiUrl for service
  apiUrl = 'https://localhost:44315/api/'; //s1.



  //added - httpClient
  constructor(
    private httpClient: HttpClient
    ) {} //s2.



  //L18: V1:getall → getCars() method : keyword→ let  | variable → newPath
  getCars(): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getall';  //s3.
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath); //s4.
  }



   //L18: getall-bybrand- getCarsByBrand() : CAR +
   getCarsByBrand(brandId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getallbybrand?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }



  //L18: getall-bycolor-getCarsByColor() : CAR +
  getCarsByColor(colorId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getallbycolor?colorId=' + colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }




  //L18: V2:getalldetails → getCarDetails : Postmanlink: https://localhost:44315/api/cars/getallcardetails
  getCarsDetails(): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getalldetails';
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }


  //L18: V3: getalldetails-bycar → DTO bazında CarId-DTO →  : Postmanlink: https://localhost:44315/api/cars/getcardetails?carId=1
  getCarsDetailsByCar(carId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getalldetailsbycar?carId=' + carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

 //L18: V3: getalldetails-bybrand → DTO bazında BrandId-DTO →  : Postmanlink:
  getCarsDetailsByBrand(brandId:number): Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + 'cars/getalldetailsbybrand?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  

  //L18: V3: getalldetails-bybrand → DTO bazında BrandId-DTO →  : Postmanlink:
  getCarsDetailsByColor(colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + 'cars/getalldetailsbycolor?colorId=' + colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);

  }
  
}

/* ================================================================= */
/*1) SERVICES - Definition
s1. HttpClient servisi önce import edildi
s2. constructor metoduyla enjekte edildi. 
s3.Böylece get() metodunda Http servisi hazır hale getirildi.
s4. apiUrl = 'x';
s5. import {*} from 'x';   */
/* 2) export class
1. export class CarService {} → apUrl
(-)apiUrl = 'https://localhost:44315/api/cars/getall'; //s1.
(+) apiUrl = 'https://localhost:44315/api'; //s2

2.  let keywordu eklemek
s1. brand
  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>> {
    return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl);
  }

 s2. color
  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>> {
 
    return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl);
  }
 3. let Keyword Yaşam Döngüsü-details
    //s1. değişken tanımladık. keyword→ let  | değişken → newPath
      //s2. https://localhost:44310/api/products/getbycolor?colorId=1
      //s3. localhost api'den sonraki link adresi → cars/getbycolor?colorId=1
      //s4. colorId=2 → colorId =
      //s5. + colorId → Method içindeki gönderdiğim colorId →→ getCarsByColor(colorId:number) 
      //s6. return içindeki (this.apiUrl) → (newPath) UYARI: Unutma!
      

*/
/* 3) Methods
s1. getCars()  
s2. getCarsByBrandId(brandId: number)
s3. getCarsByColorId(colorId: number)

*/
/* 4) DTO-GetAll-PostmanLink for getCarsDetails()
s1. cars
L18: V1:GETALL→ getCarDetails : Postmanlink: https://localhost:44315/api/cars/getallcardetails
s2. rentals
V1:GETALL→ getRentalDetails : Postmanlink: https://localhost:44315/api/rentals/getallrentaldetails
s3. cutomers
V1:GETALL→ getCustomerDetails : Postmanlink: https://localhost:44315/api/customers/getallcustomerdetails
 */
/* 5) Visual Studio → CarDetails
   public IDataResult<List<CarDetailDto>> GetCarDetails(Expression<Func<Car, bool>> filter = null)
        {
            if (DateTime.Now.Hour == 03)
            {
                return new ErrorDataResult<List<CarDetailDto>>(Messages.MaintenanceTime);
            }
            return new SuccessDataResult<List<CarDetailDto>>(_carDal.GetCarDetails());
        } */
/* 6) Code Refactoring
s1. Değişen model ismine göre import değişti.
import { CarDetail } from '../models/cardetail';
s2. get methodun'da CarDto→ CarDetail olarak değişti.
get<ListResponseModel<CarDetail>>(newPath)
for example.
  getCarsByColor(colorId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getallbycolorid?colorId=' + colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

*/
/* ====================================================================== */