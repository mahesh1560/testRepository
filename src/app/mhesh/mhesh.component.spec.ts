import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MheshComponent } from './mhesh.component';

describe('MheshComponent', () => {
  let component: MheshComponent;
  let fixture: ComponentFixture<MheshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MheshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MheshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
