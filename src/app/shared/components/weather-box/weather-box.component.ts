import { Component, Input, OnInit } from '@angular/core';

// Interfaces
import { ConsolidatedWeather } from 'src/app/models/interfaces/consolidated-weather.interface';

@Component({
  selector: 'app-weather-box',
  templateUrl: './weather-box.component.html',
  styleUrls: ['./weather-box.component.scss']
})
export class WeatherBoxComponent implements OnInit {

  @Input() public consolidatedWeather: ConsolidatedWeather[];

  constructor() { }

  ngOnInit(): void {
  }

}
