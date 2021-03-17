import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctorComponent } from './auctor.component';

describe('AuctorComponent', () => {
  let component: AuctorComponent;
  let fixture: ComponentFixture<AuctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
