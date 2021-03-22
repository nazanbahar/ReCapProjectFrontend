import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { UserComponent } from './components/user/user.component';
import { CarDtoComponent } from './components/car-dto/car-dto.component';
import { CustomerDtoComponent } from './components/customer-dto/customer-dto.component';
import { RentalDtoComponent } from './components/rental-dto/rental-dto.component';
import { CarimageComponent } from './components/carimage/carimage.component';
import { UseroperationclaimComponent } from './components/useroperationclaim/useroperationclaim.component';
import { OperationclaimComponent } from './components/operationclaim/operationclaim.component';
import { NavComponent } from './components/nav/nav.component';
import{HttpClientModule} from '@angular/common/http'; //API'ye İstekde Bulunmak-Requesting the API-manuel added...

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    CarComponent,
    ColorComponent,
    CustomerComponent,
    RentalComponent,
    UserComponent,
    CarDtoComponent,
    CustomerDtoComponent,
    RentalDtoComponent,
    CarimageComponent,
    UseroperationclaimComponent,
    OperationclaimComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  //API'ye İstekde Bulunmak, manuel added...
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
