import { TestBed } from '@angular/core/testing';

import { TogglePositionService } from './toggle-position.service';

describe('TogglePositionService', () => {
  let service: TogglePositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TogglePositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
