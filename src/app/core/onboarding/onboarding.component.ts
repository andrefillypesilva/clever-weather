import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Enums
import { LOCALSTORAGECONFIG } from 'src/app/models/enums/local-storage.config.enum';

// Interfaces
import { Onboarding } from 'src/app/models/interfaces/onboarding.interface';

// Services
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ height: 0, opacity: 0 }),
            animate('.6s ease-out', 
                    style({ height: 300, opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: 300, opacity: 1 }),
            animate('.1s ease-in', 
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class OnboardingComponent implements OnInit {

  public step: number;

  public onboardingList: Onboarding[];

  constructor(
    private readonly localStorageService: LocalStorageService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.step = 0;

    this.onboardingList = [
      {
        icon: 'map',
        title: 'Perfect Weather Explorer',
        description: 'Here you can find everything about weather around the world!',
        step: 0
      },
      {
        icon: 'mobile',
        title: 'Any city in your hand!',
        description: 'Search the city you want to know about the weather and have fun!',
        step: 1
      },
      {
        icon: 'unlock',
        title: 'Allow us to know where you are',
        description: 'We need to know where you are for give you the weather forecast of your region!',
        step: 2
      }
    ];
  }

  public next(): void {
    this.step++;
  }

  public finish(): void {
    this.askForGeolocationAccess();
  }

  // For Unit Tests: setLocalStorageFinished()
  public testingSetLocalStorageFinished(): void {
    this.setLocalStorageFinished();
  }

  private setLocalStorageFinished(): boolean {
    let response = this.localStorageService.setItem(LOCALSTORAGECONFIG.FIRST_ACCESS, true);
    return response;
  }

  // For Unit Tests: askForGeolocationAccess()
  public testingAskForGeolocationAccess(): void {
    this.askForGeolocationAccess();
  }

  private askForGeolocationAccess(): void {
    navigator.geolocation.getCurrentPosition(() => {
      if (this.setLocalStorageFinished()) {
        this.router.navigate(['/home']);
      } else {
        alert('Something went wrong! We can not save your local storage first access.');
      }
    }, () => {
      alert('To use this app, you need to allow geolocation.');
    });
  }

}
