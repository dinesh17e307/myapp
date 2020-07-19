import { TestBed } from '@angular/core/testing';

import { DishServicesService } from './dish-services.service';

describe('DishServicesService', () => {
  let service: DishServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DishServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
