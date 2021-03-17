import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SislafComponent } from './sislaf.component';

describe('SislafComponent', () => {
  let component: SislafComponent;
  let fixture: ComponentFixture<SislafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SislafComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SislafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
