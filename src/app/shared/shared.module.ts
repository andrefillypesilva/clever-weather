import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Components
import { WeatherBoxComponent } from './components/weather-box/weather-box.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { OnboardingCardComponent } from './components/onboarding-card/onboarding-card.component';

@NgModule({
  declarations: [
    WeatherBoxComponent,
    WeatherCardComponent,
    OnboardingCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    WeatherBoxComponent,
    OnboardingCardComponent
  ]
})
export class SharedModule { }
