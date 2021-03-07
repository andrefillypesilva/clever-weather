import { Component, Input, OnInit } from '@angular/core';

// Interfaces
import { ConsolidatedWeather } from 'src/app/models/interfaces/consolidated-weather.interface';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

 @Input() public weather: ConsolidatedWeather;

  constructor() { }

  ngOnInit(): void {
  }

}
