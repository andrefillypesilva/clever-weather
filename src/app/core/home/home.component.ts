import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  public formGroup: FormGroup;

  constructor(
    private readonly weatherService: WeatherService,
    private readonly fb: FormBuilder
  ) {
    this.formGroup = this.fb.group({
      query: [null]
    });
  }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(position => {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      
      this.weatherService.getPlace(lat, long).subscribe((data: Place[]) => {
        this.place = `${data[0].title} <span>(based on your geolocation)</span>`;

        this.weatherForecast$ = this.weatherService.getWeather(data[0].title);
      });

    }, () => {
      alert('user not allowed');
    });
  }

  search(): void {
    this.weatherService.getPlaceByName(this.formGroup.get('query').value).subscribe((data: any) => {
      this.place = `${data.name}, ${data.country}`;
      this.weatherForecast$ = this.weatherService.getWeather(this.formGroup.get('query').value);
    });
  }

}
