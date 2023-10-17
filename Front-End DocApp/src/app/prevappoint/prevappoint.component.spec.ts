import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevappointComponent } from './prevappoint.component';

describe('PrevappointComponent', () => {
  let component: PrevappointComponent;
  let fixture: ComponentFixture<PrevappointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevappointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevappointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
