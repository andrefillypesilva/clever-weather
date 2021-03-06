import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

// Models - Enums
import { LOCALSTORAGECONFIG } from 'src/app/models/enums/local-storage.config.enum';

// Services
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class FirstAccessGuard implements CanActivate {

  constructor(
    private readonly localStorageService: LocalStorageService,
    private readonly router: Router,
  ) { }

  canActivate(): boolean {
    let alreadyAccessed = this.localStorageService.getItem(LOCALSTORAGECONFIG.FIRST_ACCESS);

    if (alreadyAccessed) {
      this.router.navigate(['/home']);
      return false;
    }

    return true;
  }
  
}
