import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {
  //cars: CarsComponent[] = [];
  //parameter→ carDetail
  carDetails: CarDetail[] = [];
  dataLoaded: boolean = false;

  //Injecting services and activated route
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  //L18: ngOnit → if-else-calling function options
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsDetailsByBrand(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsDetailsByColor(params['colorId']);
      } else {
        this.getCarsDetails();
      }
    });
  }

  //==============
  //getalldetails
  //==============
  getCarsDetails() {
    this.carService.getCarsDetails().subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }


  getCarsDetailsByCar(carId: number) {
    this.carService.getCarsDetailsByCar(carId).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;  

    })
  }


  getCarsDetailsByBrand(brandId:number) {
    this.carService.getCarsDetailsByBrand(brandId).subscribe((response)=>{
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsDetailsByColor(colorId:number) {
    this.carService.getCarsDetailsByColor(colorId).subscribe((response)=>{
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }
  
}



/* ======================================================================================== */
/* 1) L18: Using Angular ActivatedRouteService...
s1. Technique → Angular'da Building Service
s2. servisName → ActivatedRouteService
before...
s3.code-syntax
  constructor(
              private carService: CarService,
              private activatedRoute:ActivatedRoute, 
              ) { }
after...
s4. import
import { ActivatedRoute } from '@angular/router';
*/
/* 2) L18: ngOnit → if-else-calling function options
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params["brandId"]){
        this.getCarsByBrandId(params["brandId"])
      }
      else if(params["colorId"]){
         this.getCarsByColorId(params["colorId"]) 
      }
      else{
        this.getCars()
      }
    });
  }
*/
/* 3) L18) Methods
s1. getCars()
s2. getCarsByBrand(brandId: number)
s3.  getCarsByColor(colorId: number)

*/
/* 4) Definition
parameter→ carDetail 
*/
/* 5) Summary
CarService servisini CarsComponent içinde inject ettikten sonra 
getCars methodunu çağırabiliriz. Gelen veriyi carDetail değişkenine bağladıktan sonra 
artık sayfada veriyi gösterebiliriz. */
/* 6) v2. 
//================ 
//getall
//================
   //default method
   getCars() {
    this.carService.getCars().subscribe((response) => {
      this.carDetail = response.data;
      this.dataLoaded = true;
    });
  }


  //L18: getCarsByBrand() methodunu
  getCarsByBrand(brandId: number) {
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.carDetail = response.data; //once calisir...
    });
  }



  //L18: getCarsByColor() methodu
  getCarsByColor(colorId: number) {
    this.carService.getCarsByColor(colorId).subscribe((response) => {
      this.carDetail = response.data; //once calisir...
    
    });
  }
*/
/* ========================================================================================= */