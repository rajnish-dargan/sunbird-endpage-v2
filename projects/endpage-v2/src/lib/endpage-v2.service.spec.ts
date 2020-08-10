import { TestBed } from '@angular/core/testing';

import { EndpageV2Service } from './endpage-v2.service';

describe('EndpageV2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EndpageV2Service = TestBed.get(EndpageV2Service);
    expect(service).toBeTruthy();
  });
});
