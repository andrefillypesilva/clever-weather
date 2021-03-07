import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

// Interfaces
import { Place } from 'src/app/models/interfaces/place.interface';
import { ConsolidatedWeather } from 'src/app/models/interfaces/consolidated-weather.interface';

// Services
import { WeatherService } from 'src/app/shared/services/weather.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public place: string;
  
  public consolidatedWeather$: Observable<ConsolidatedWeather[]>;

  public formGroup: FormGroup;

  constructor(
    private readonly weatherService: WeatherService,
    private readonly fb: FormBuilder,
    private readonly localStorageService: LocalStorageService,
    private readonly router: Router
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
        this.consolidatedWeather$ = this.weatherService.getWeather(data[0].woeid);
      });

    }, () => {
      this.forceGeolocationAccess();
    });
  }

  search(): void {
    this.weatherService.getPlaceByName(this.formGroup.get('query').value).subscribe((data: Place[]) => {
      this.place = `${data[0].title} <span>(based on the search you have done)</span>`;
      this.consolidatedWeather$ = this.weatherService.getWeather(data[0].woeid);
    });
  }

  private forceGeolocationAccess(): void {
    alert('To use this app, you need to allow geolocation.');
    this.localStorageService.clearLocalStorage();
    this.router.navigate(['/']);
  }

}
