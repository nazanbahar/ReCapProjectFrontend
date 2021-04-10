import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//API'ye İstekde Bulunmak-Requesting the API-manuel added...
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { NavComponent } from './components/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { RentalDetailComponent } from './components/rental-detail/rental-detail.component';
import { CarsComponent } from './components/cars/cars.component';
import { CustomersComponent } from './components/customers/customers.component';
import { RentalsComponent } from './components/rentals/rentals.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    NavComponent,
    CarDetailComponent,
    CustomerDetailComponent,
    RentalDetailComponent,
    CarsComponent,
    CustomersComponent,
    RentalsComponent,
    FooterComponent,
    
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
