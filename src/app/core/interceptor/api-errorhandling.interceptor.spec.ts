import { TestBed } from '@angular/core/testing';

import { ApiErrorhandlingInterceptor } from './api-errorhandling.interceptor';

describe('ApiErrorhandlingInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ApiErrorhandlingInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ApiErrorhandlingInterceptor = TestBed.inject(ApiErrorhandlingInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
