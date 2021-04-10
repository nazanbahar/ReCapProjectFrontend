import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.css']
})

export class RentalsComponent implements OnInit {
  rentals: Rental[] = [];
  dataLoaded: boolean = false;

  
  constructor(
    private rentalService: RentalService
    ) { }

  ngOnInit(): void {
    this.getRentals();
  }


  getRentals() {
    this.rentalService.getRentals().subscribe(response=> {
      this.rentals = response.data
      this.dataLoaded = true;
    })
  }

}
