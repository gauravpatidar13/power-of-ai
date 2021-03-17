import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JealComponent } from './jeal.component';

describe('JealComponent', () => {
  let component: JealComponent;
  let fixture: ComponentFixture<JealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
