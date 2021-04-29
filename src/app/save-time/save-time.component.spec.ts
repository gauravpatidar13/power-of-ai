import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveTimeComponent } from './save-time.component';

describe('SaveTimeComponent', () => {
  let component: SaveTimeComponent;
  let fixture: ComponentFixture<SaveTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
