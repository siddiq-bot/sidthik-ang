import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HEROSComponent } from './heros.component';

describe('HEROSComponent', () => {
  let component: HEROSComponent;
  let fixture: ComponentFixture<HEROSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HEROSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HEROSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
