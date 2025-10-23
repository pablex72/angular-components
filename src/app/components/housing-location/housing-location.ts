import { Component, Input } from '@angular/core';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  imports: [],
  templateUrl: './housing-location.html',
  styleUrl: './housing-location.css',
})
export class HousingLocation {

  @Input() housingLocation! : HousingLocation;
  
}
