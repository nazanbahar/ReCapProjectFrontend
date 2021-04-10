import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  colors: Color[] = [];
  currentColor: Color; //set edilecek code
  //dataLoaded: boolean = false; //variable--> dataLoaded

  constructor(
    private colorService: ColorService,
    ) {}

  ngOnInit(): void {
    this.getColors();
  }

  //s1.
  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  //L18: Event Binding Clicking
  setCurrentColor(color: Color) {
    this.currentColor = color;
  }

  //L18: Selected Category Active
  getCurrentColorClass(color: Color) {
    if (color == this.currentColor) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }

  //L18: Tüm renkleri getirmek-Step:2
  getAllColorClass() {
    if (!this.currentColor) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }

  //L18: reset : IsEmpty ++


  
}


/* ======================================================================================== */
/* 1) L18: Event Binding... 
s1. Set Etmek
 L18: Event Binding Clicking
  setCurrentColor(color:Color){
    this.currentColor = color;
    }
s2. tsconfig.json
tsconfig.json below "strict" added → "strictPropertyInitialization":false,

s3. TS: color.component.ts
CLASS → export class ColorComponent implements OnInit{*}
src\app\components\color\color.component.ts
currentColor : Color;  //set edilecek code
s4. Data Management
colors: Color[] = [];
currentColor : Color;  //set edilecek code

 */
/* ======================================================================================== */