import { TestBed, inject } from '@angular/core/testing';

import { RealProductService } from './real-product.service';

describe('RealProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RealProductService]
    });
  });

  it('should be created', inject([RealProductService], (service: RealProductService) => {
    expect(service).toBeTruthy();
  }));
});
