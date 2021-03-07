import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { WeatherBoxComponent } from './components/weather-box/weather-box.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';

@NgModule({
  declarations: [
    WeatherBoxComponent,
    WeatherCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    WeatherBoxComponent
  ]
})
export class SharedModule { }
