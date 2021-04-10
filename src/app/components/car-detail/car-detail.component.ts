import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarService } from 'src/app/services/car.service';
import { CarImageService } from 'src/app/services/carimage.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  carDetail:CarDetail;
  imageUrl = 'https://localhost:44315';
  dataLoaded: boolean = false;


  //L18: s1. using angular activatedRouteService
  //L18: s2. manuel: CarService|CarImageService|ActivatedRoute
  //L18: s3. Injecting services, activated route, carImage
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private carImageService: CarImageService,
  ) {}



  //L18: ngOnit → if-else-calling function options  
  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
       
        this.getCarsDetailsByCar(params['carId']);
      }
    });
  }




//L18: getCarsDetailsByCar methodu -sadece Id
  getCarsDetailsByCar(carId: number) {
    this.carService.getCarsDetailsByCar(carId).subscribe((response) => {
      this.carDetail = response.data[0];
      this.dataLoaded = true;
    });
  }



  imageClassGenerate(imagePath:string){
    if (imagePath ===this.carDetail.images[0]) {
      return 'carousel-item active'
    }else{
      return 'carousel-item'
    }
  }


}
