import { Component } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly baseUrl = 'https://cdn.pixabay.com/photo/2017/03/27/13/28/man-2178721_1280.jpg';

  housinglocation: Housinglocation = {
    id: 555,
    name: 'hello',
    city: 'cbba',
    state: 'cbba',
    photo: `${this.baseUrl}`,
    availableUnits: 44,
    wifi: true,
    laundry: true,
  };
}
