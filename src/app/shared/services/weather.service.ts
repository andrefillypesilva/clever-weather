import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

// Interfaces
import { Place } from 'src/app/models/interfaces/place.interface';
import { ConsolidatedWeather } from 'src/app/models/interfaces/consolidated-weather.interface';

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

  public getPlaceByName(title: string): Observable<Place[]> {
    return this.http.get<Place[]>(`/api/location/search/?query=${title}`);
  }

  public getWeather(woeid: number): Observable<ConsolidatedWeather[]> {
    return this.http.get<ConsolidatedWeather[]>(`/api/location/${woeid}/`)
    .pipe(
      pluck('consolidated_weather')
    );
  }
}
