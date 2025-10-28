import { Component, inject } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { HousingLocationComponent } from '../housing-location/housing-location';
import { CommonModule } from '@angular/common';
import { Housing } from '../housing';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css',
  imports: [CommonModule, HousingLocationComponent],
})
export class Home {
  housingLocationList: HousingLocation [] = [];

  housing: Housing = inject(Housing);

  constructor(){
    this.housingLocationList = this.housing.getAllHousingLocation();
    
  }
}
