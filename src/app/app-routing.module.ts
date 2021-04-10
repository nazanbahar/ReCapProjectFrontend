import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarsComponent } from './components/cars/cars.component';
import { ColorComponent } from './components/color/color.component';

//L18: routes array configurations
//L18: pathName→ - UNIQUE - optional - arabalar
//L18: FULL - pathMatch → homepage - :routing configurations
//L18: buton: routerLink-cars/detail component-click buton → detail
const routes: Routes = [
  { path: '', pathMatch: 'full',  redirectTo: 'cars' },
  //cars 
  { path: 'cars', component: CarsComponent },
  { path: 'cars/brand/:brandId', component: CarsComponent },
  { path: 'cars/color/:colorId', component: CarsComponent },
  //cardetail
  { path: 'cars/detail', component: CarDetailComponent },
  { path: 'cars/detail/:carId', component: CarDetailComponent },

  //brands
  { path: 'brands', component: BrandComponent, },
  //colors
  { path: 'colors', component: ColorComponent, },
 
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

/* 1) Routing Yapısını Kurmak...
//L18: routes array configurations
const routes: Routes = [
  //L18: FULL - pathMatch → homepage
  { path: '', pathMatch: 'full', component: CarDtoComponent },

  //L18:COMPONENTS :routing configurations → cars/colors/brands/rents/users/customers
  { path: 'cars', component: CarComponent },
  { path: 'brands', component: BrandComponent, },
  { path: 'colors', component: ColorComponent, },

  //L18:DTOS :routing configurations
  { path: 'cars', component: CarDtoComponent, },

  //L18:GETBYID:routing configurations
  //L18: carId
  { path: 'cars/details/:carId', component: CarDtoComponent },
  //L18: brandId
  { path: 'cars/brand/:brandId', component: CarDtoComponent },

  //L18:colorId
  { path: 'cars/color/:colorId', component: CarDtoComponent },
];
 */
/* 2) Routing -example
1. in app-routing.module.ts:
in my Routes array :
{path: '/link/:paramsName', component: MyComponent }
2. in HTML code :
<button
type="button"
routerLink="/link/params/{{ carDetail.carId }}">
MyLink
</button>
*/
/* 3) Disabled
//(x){ path: 'cars-details', component: CarDetailComponent },
  //(x) { path: 'cars-details/:carId', component: CarDetailComponent }, */