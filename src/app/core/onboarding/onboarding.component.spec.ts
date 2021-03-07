import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

// Components
import { OnboardingCardComponent } from 'src/app/shared/components/onboarding-card/onboarding-card.component';
import { OnboardingComponent } from './onboarding.component';

// Services
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

// Enums
import { LOCALSTORAGECONFIG } from 'src/app/models/enums/local-storage.config.enum';

describe('OnboardingComponent', () => {
  let onboarding: OnboardingComponent;
  let fixture: ComponentFixture<OnboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule, RouterTestingModule ],
      declarations: [ OnboardingComponent, OnboardingCardComponent ],
      providers: [ LocalStorageService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingComponent);
    onboarding = fixture.componentInstance;
    fixture.detectChanges();

    onboarding.testingAskForGeolocationAccess();
  });

  it('should create', () => {
    expect(onboarding).toBeTruthy();
  });

  it('should increment [step] value', () => {
    const stepInitial = onboarding.step;
    onboarding.next();

    expect(onboarding.step).toBeGreaterThan(stepInitial);
  });

  it('should to set first-access into local storage', () => {
    const firstAccess = localStorage.getItem(LOCALSTORAGECONFIG.FIRST_ACCESS);
    onboarding.testingSetLocalStorageFinished();

    expect(JSON.parse(localStorage.getItem(LOCALSTORAGECONFIG.FIRST_ACCESS))).toBe(true);
    expect(localStorage.getItem(LOCALSTORAGECONFIG.FIRST_ACCESS)).not.toBe(firstAccess);
  });
  
  it('should render [Perfect Weather Explorer] in the first card of onboarding', () => {
    const compiled = fixture.nativeElement;
    const text = compiled.querySelector('.secondary-heading');

    expect(text.textContent).toContain('Perfect Weather Explorer');
  });
});
