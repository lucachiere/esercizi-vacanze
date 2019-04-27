import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenComponent } from './pren.component';

describe('PrenComponent', () => {
  let component: PrenComponent;
  let fixture: ComponentFixture<PrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
