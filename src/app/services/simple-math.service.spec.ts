import { TestBed } from '@angular/core/testing';

import { SimpleMathService } from './simple-math.service';
import { SharedModule } from '../shared/shared.module';
import { HttpClient } from '@angular/common/http';

describe('SimpleMathService', () => {
  let service: SimpleMathService;
  let http: HttpClient;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ]
    }).compileComponents();
  });
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleMathService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('One plus one should be two', () => {
    expect(service.add(1, 1)).toEqual(2);
  })
});
