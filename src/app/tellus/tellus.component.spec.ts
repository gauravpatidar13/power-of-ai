import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TellusComponent } from './tellus.component';

describe('TellusComponent', () => {
  let component: TellusComponent;
  let fixture: ComponentFixture<TellusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TellusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TellusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
