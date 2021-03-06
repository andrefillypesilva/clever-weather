import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Models - Enums
import { LOCALSTORAGECONFIG } from 'src/app/models/enums/local-storage.config.enum';

// Services
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {

  public step: number;

  constructor(
    private readonly localStorageService: LocalStorageService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.step = 1;
  }

  public next(): void {
    this.step++;
  }

  public finish(): void {
    if (this.setLocalStorageFinished()) {
      this.router.navigate(['/home']);
    } else {
      alert('Something went wrong! We can not save your local storage first access.');
    }
  }

  private setLocalStorageFinished(): boolean {
    let response = this.localStorageService.setItem(LOCALSTORAGECONFIG.FIRST_ACCESS, true);
    return response;
  }

}
