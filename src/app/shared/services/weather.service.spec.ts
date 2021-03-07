import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';

// Test Mocks
import { MOCK__PLACES } from 'src/app/test-mocks/mock-places.mock';
import { MOCK__CONSOLIDATED_WEATHER } from 'src/app/test-mocks/mock-consolidated-weather.mock';

// Services
import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let service: WeatherService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [WeatherService],
    });
    injector = getTestBed();
    service = injector.inject(WeatherService);
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an object of [Place] with Lisbon data', () => {
    service.getPlaceByName('lisbon').subscribe((places) => {
      expect(places.length).toBe(1);
      expect(places[0].woeid).toBe(742676); // Code for Lisbon city
      expect(MOCK__PLACES).toBe(places);
    });

    const req = httpMock.expectOne('/api/location/search/?query=lisbon');
    req.flush(MOCK__PLACES);
  });

  it('should return an object of [ConsolidatedWeather] with Lisbon data', () => {
    service.getWeather(742676).subscribe((consolidatedWeather) => {
      expect(consolidatedWeather.length).toBe(1);
      expect(consolidatedWeather[0].the_temp).toBeGreaterThanOrEqual(-2); // Lowest temperature has ever registered for Lisbon in history
      expect(MOCK__CONSOLIDATED_WEATHER).toBe(consolidatedWeather);
    });

    const req = httpMock.expectOne('/api/location/742676/');
    req.flush(MOCK__CONSOLIDATED_WEATHER);
  });
});
