import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Routing
import { CoreRoutingModule } from './core-routing.module';

// Components
import { HomeComponent } from './home/home.component';
import { OnboardingComponent } from './onboarding/onboarding.component';

@NgModule({
  declarations: [HomeComponent, OnboardingComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CoreModule { }
