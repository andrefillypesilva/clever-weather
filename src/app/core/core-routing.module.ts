import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Guards
import { FirstAccessGuard } from '../shared/guards/first-access.guard';

// Components
import { HomeComponent } from './home/home.component';
import { OnboardingComponent } from './onboarding/onboarding.component';

const routes: Routes = [
    {
        path: '',
        component: OnboardingComponent,
        canActivate: [FirstAccessGuard]
    },
    {
        path: 'home',
        component: HomeComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
