import { TestBed } from '@angular/core/testing';

import { UrlPatcherInterceptor } from './url-patcher.interceptor';

describe('UrlPatcherInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      UrlPatcherInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: UrlPatcherInterceptor = TestBed.inject(UrlPatcherInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
