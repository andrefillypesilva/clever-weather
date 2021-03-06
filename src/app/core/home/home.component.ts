import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Interfaces
import { Place } from 'src/app/models/interfaces/place.interface';
import { WeatherForecast } from 'src/app/models/interfaces/weather-forecast.interface';

// Services
import { WeatherService } from 'src/app/shared/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public place: string;
  
  public weatherForecast$: Observable<WeatherForecast[]>;

  constructor(
    private readonly weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(position => {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      
      this.weatherService.getPlace(lat, long).subscribe((data: Place[]) => {
        this.place = data[0].title;

        this.weatherForecast$ = this.weatherService.getWeather(data[0].title);
      });

    }, () => {
      alert('user not allowed');
    });
  }

}
