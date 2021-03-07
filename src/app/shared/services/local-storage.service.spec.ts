import { TestBed } from '@angular/core/testing';

// Enums
import { LOCALSTORAGECONFIG } from 'src/app/models/enums/local-storage.config.enum';

// Services
import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should to set an item into local-storage', () => {
    const before = service.getItem(LOCALSTORAGECONFIG.FIRST_ACCESS);
    const response = service.setItem(LOCALSTORAGECONFIG.FIRST_ACCESS, false);

    expect(response).toBe(true);
    expect(before).not.toBe(service.getItem(LOCALSTORAGECONFIG.FIRST_ACCESS));
  });

  it('should to return [null] for a non-existing item', () => {
    service.clearLocalStorage();

    expect(service.getItem(LOCALSTORAGECONFIG.FIRST_ACCESS)).toBeNull();
  });
});
