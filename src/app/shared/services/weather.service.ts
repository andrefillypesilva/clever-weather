import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

// Interfaces
import { Place } from 'src/app/models/interfaces/place.interface';
import { WeatherForecast } from 'src/app/models/interfaces/weather-forecast.interface';

// Environment
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(
    private readonly http: HttpClient
  ) {}

  public getPlace(lat: number, long: number): Observable<Place[]> {
    return this.http.get<Place[]>(`/api/location/search/?lattlong=${lat},${long}`);
  }

  public getPlaceByName(title: string): Observable<any> {
    return this.http.get<Place[]>(`/openweathermap/forecast?q=${title}&units=metric&appid=${environment.openWeatherMapKey}`)
    .pipe(
      pluck('city')
    );
  }

  public getWeather(title: string): Observable<WeatherForecast[]> {
    return this.http.get<WeatherForecast[]>(`/openweathermap/forecast?q=${title}&units=metric&appid=${environment.openWeatherMapKey}`)
    .pipe(
      pluck('list'),
      map((forecast: WeatherForecast[]) => {
        return forecast.map((f: WeatherForecast) => {
          if (f.dt_txt.includes("00:00:00")) {
            return f;
          }
        }).filter(elem => elem);
      }),
    );
  }
}
