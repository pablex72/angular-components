import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class Housing {
  readonly baseUrl = 'https://cdn.pixabay.com/photo/2017/03/27/13/28/man-2178721_1280.jpg';

  housingLocationList: HousingLocation[] = [
    {
      id: 555,
      name: 'hello',
      city: 'cbba',
      state: 'cbba',
      photo: `${this.baseUrl}`,
      availableUnits: 44,
      wifi: true,
      laundry: true,
    },
  ];
}
