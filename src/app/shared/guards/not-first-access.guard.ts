import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

// Models - Enums
import { LOCALSTORAGECONFIG } from 'src/app/models/enums/local-storage.config.enum';

// Services
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class NotFirstAccessGuard implements CanActivate {
  constructor(
    private readonly localStorageService: LocalStorageService,
    private readonly router: Router
  ) {}

  canActivate(): boolean {
    let neverAccessed = this.localStorageService.getItem(LOCALSTORAGECONFIG.FIRST_ACCESS);

    if (neverAccessed) {
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }
}
