import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public setItem(key: string, value: any): boolean {
    try {
      localStorage.setItem(key, JSON.stringify(value));

      return true;
    } catch {
      return false;
    }
  }

  public getItem(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch {
      return null;
    }
  }

  public clearLocalStorage(): void {
    localStorage.clear();
  }
}
