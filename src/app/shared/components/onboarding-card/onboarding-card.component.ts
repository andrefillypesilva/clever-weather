import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// Interfaces
import { Onboarding } from 'src/app/models/interfaces/onboarding.interface';

@Component({
  selector: 'app-onboarding-card',
  templateUrl: './onboarding-card.component.html',
  styleUrls: ['./onboarding-card.component.scss']
})
export class OnboardingCardComponent implements OnInit {

  @Input() public onboarding: Onboarding;

  @Output() public onNext: EventEmitter<boolean> = new EventEmitter();

  @Output() public onFinish: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  next = (): void => this.onNext.emit(true);

  finish = (): void => this.onFinish.emit(true);

}
