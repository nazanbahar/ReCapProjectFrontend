import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  dataLoaded: boolean = false;  //variable--> dataLoaded 

  
  constructor(private brandService : BrandService) { }

 //calling the function with this
  ngOnInit(): void {
    this.getBrands(); 
  }

  getBrands() {
    this.brandService.getBrands().subscribe(response=>{
    this.brands=response.data  //runs before
    this.dataLoaded = true; //runs after
    })
  }

}