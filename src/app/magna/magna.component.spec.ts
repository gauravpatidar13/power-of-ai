import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnaComponent } from './magna.component';

describe('MagnaComponent', () => {
  let component: MagnaComponent;
  let fixture: ComponentFixture<MagnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagnaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
