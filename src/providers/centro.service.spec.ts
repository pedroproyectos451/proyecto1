/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CentroService } from './centro.service';

describe('CentroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CentroService]
    });
  });

  it('should ...', inject([CentroService], (service: CentroService) => {
    expect(service).toBeTruthy();
  }));
});
