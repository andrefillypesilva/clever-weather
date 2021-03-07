import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Interfaces
import { ConsolidatedWeather } from 'src/app/models/interfaces/consolidated-weather.interface';

@Component({
  selector: 'app-weather-box',
  templateUrl: './weather-box.component.html',
  styleUrls: ['./weather-box.component.scss']
})
export class WeatherBoxComponent implements OnInit {

  @Input('consolidatedWeather') public consolidatedWeather$: Observable<ConsolidatedWeather[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
