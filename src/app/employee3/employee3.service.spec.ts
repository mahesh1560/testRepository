import { TestBed } from '@angular/core/testing';

import { Employee3Service } from './employee3.service';

describe('Employee3Service', () => {
  let service: Employee3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Employee3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
