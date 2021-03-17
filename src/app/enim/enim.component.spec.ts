import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnimComponent } from './enim.component';

describe('EnimComponent', () => {
  let component: EnimComponent;
  let fixture: ComponentFixture<EnimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
