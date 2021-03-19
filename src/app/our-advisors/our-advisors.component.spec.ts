import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurAdvisorsComponent } from './our-advisors.component';

describe('OurAdvisorsComponent', () => {
  let component: OurAdvisorsComponent;
  let fixture: ComponentFixture<OurAdvisorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurAdvisorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurAdvisorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
