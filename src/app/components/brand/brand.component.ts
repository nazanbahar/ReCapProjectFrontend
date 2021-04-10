import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl:'./brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  currentBrand : Brand; 
  dataLoaded: boolean = false;  //variable--> dataLoaded 



  //L18: private brandService
  constructor(private brandService : BrandService) { }

 //calling the function with this
  ngOnInit(): void {
    this.getBrands(); 
  }




  //s1.Default  
  getBrands() {
    this.brandService.getBrands().subscribe(response=>{
    this.brands=response.data  //runs before
    this.dataLoaded = true;
    })
  }




  //L18: Set-Current→ Event Binding Clicking
  setCurrentBrand(brand:Brand){
  this.currentBrand = brand;
  }



  //L18: get-CurrentClass→ Selected Category Active
  getCurrentBrandClass(brand:Brand){
    if(brand == this.currentBrand){
      return 'list-group-item active'
    }else{
      return 'list-group-item'
    }
  }


  
    //L18: getAllClass→ Bringing All Category-Step:2
    getAllBrandClass(){
      if(!this.currentBrand){
        return 'list-group-item active'
      }else{
        return 'list-group-item'
      }
    }

    //L18: reset : IsEmpty ++
   
}

/* =====================================================================================================*/
/* 1) L18: Event Binding... 
s1. Set Etmek
 L18: Event Binding Clicking
  setCurrentColor(color:Color){
    this.currentColor = color;
    }
s2. tsconfig.json
tsconfig.json below "strict" added → "strictPropertyInitialization":false,

s3. TS: brand.component.ts
CLASS → export class BrandComponent implements OnInit{*}
src\app\components\brand\brand.component.ts
currentBrand : Brand;  //set edilecek code
s4. Data Management
brands: Brand[] = [];
currentBrand : Brand;  //set edilecek code
 */
/* =====================================================================================================*/