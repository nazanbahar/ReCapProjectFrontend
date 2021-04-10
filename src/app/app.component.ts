/* 1) Definitions Rules

1. Component Definitions Rules
s1.for example:
===========================
@Component({ ... })
export class HeroesComponent { }
heroes.component.ts
==================================
@Component({ ... })
export class HeroListComponent { }
hero-list.component.ts
==================================
@Component({ ... })
export class HeroDetailComponent { }
hero-detail.component.ts 
============================================
@Component({
  selector: 'toh-hero-button',
  templateUrl: './hero-button.component.html'
})
export class HeroButtonComponent {}
======================================
s2. bkz. https://angular.io/guide/styleguide#rule-of-one

2. L18: Error-StackOverflow
Error: 'File name differs from already included file name only in casing' on relative path with same casing
bkz. https://stackoverflow.com/questions/51197940/file-name-differs-from-already-included-file-name-only-in-casing-on-relative-p
s1.disable the "forceConsistentCasingInFileNames" in the tsconfig.json file.
s2. {
  "compilerOptions": {
    ...
    "forceConsistentCasingInFileNames": false,
    ...
  }
}
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'recap';
  user: string = "Nazan Bahar"
}
