import { TestBed } from '@angular/core/testing';

import { MickeyImageViewerService } from './mickey-image-viewer.service';

describe('MickeyImageViewerService', () => {
  let service: MickeyImageViewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MickeyImageViewerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
