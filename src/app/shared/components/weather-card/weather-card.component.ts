import { Component, Input, OnInit } from '@angular/core';

// Interfaces
import { ConsolidatedWeather } from 'src/app/models/interfaces/consolidated-weather.interface';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnInit {
  @Input() public weather: ConsolidatedWeather;

  @Input() public isShare = false;

  constructor() {}

  ngOnInit(): void {}

  share(): void {
    if (navigator.share) {
      navigator
        .share({
          title: 'CleverWeather',
          text: 'Everything about weather in your city.',
          url: 'https://localhost:4201',
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    } else {
      console.log('It is not possible share content in this device.');
    }
  }
}
